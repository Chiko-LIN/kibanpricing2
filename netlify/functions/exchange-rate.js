const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  // CORS headers with caching
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json',
    'Cache-Control': 'public, max-age=86400' // Cache for 24 hours
  };

  // Handle preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Only allow GET
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Get currency parameters (default: USD to JPY)
    const from = event.queryStringParameters?.from || 'USD';
    const to = event.queryStringParameters?.to || 'JPY';

    // Get API key from environment
    const apiKey = process.env.EXCHANGE_RATE_API_KEY || '04c0ac7e197cb98292070aca';

    // Call exchange rate API
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}`;
    
    console.log('Fetching exchange rate:', from, 'to', to);

    const response = await fetch(apiUrl);

    if (!response.ok) {
      console.error('Exchange rate API error:', response.status);
      // Return fallback rate
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ 
          from,
          to,
          rate: 150, // Fallback USD to JPY rate
          fallback: true,
          message: 'Using fallback exchange rate'
        })
      };
    }

    const data = await response.json();

    if (data.result !== 'success') {
      console.error('Exchange rate API returned error:', data);
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ 
          from,
          to,
          rate: 150,
          fallback: true,
          message: 'Using fallback exchange rate'
        })
      };
    }

    // Return the exchange rate
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        from,
        to,
        rate: data.conversion_rate,
        fallback: false,
        time_last_update: data.time_last_update_utc
      })
    };

  } catch (error) {
    console.error('Error in exchange-rate function:', error);
    // Return fallback rate even on error
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        from: 'USD',
        to: 'JPY',
        rate: 150,
        fallback: true,
        message: 'Using fallback exchange rate due to error',
        error: error.message
      })
    };
  }
};
