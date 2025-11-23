const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse request body
    const body = JSON.parse(event.body || '{}');
    const { params } = body;

    if (!params) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing params in request body' })
      };
    }

    // Get environment variables
    const apiBaseUrl = process.env.EXTERNAL_API_BASE_URL;
    const apiKey = process.env.EXTERNAL_API_KEY;

    // Check if API is configured (validate URL properly)
    if (!apiBaseUrl) {
      console.error('External API not configured. EXTERNAL_API_BASE_URL is missing');
      return {
        statusCode: 503,
        headers,
        body: JSON.stringify({ 
          error: '後端APIがまだ設定されていません。管理者にお問い合わせください。'
        })
      };
    }

    // Validate that URL is not a placeholder
    try {
      const url = new URL(apiBaseUrl);
      // Check for placeholder domains using exact hostname match
      const placeholderDomains = ['placeholder.example.com', 'example.com', 'your-python-backend.herokuapp.com'];
      if (placeholderDomains.includes(url.hostname)) {
        throw new Error('Placeholder URL detected');
      }
    } catch (error) {
      console.error('External API URL validation failed:', error.message);
      return {
        statusCode: 503,
        headers,
        body: JSON.stringify({ 
          error: '後端APIがまだ設定されていません。管理者にお問い合わせください。'
        })
      };
    }

    // Prepare request to external API
    const apiUrl = `${apiBaseUrl}/get-quotes`;
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ params })
    };

    // Add API key if provided
    if (apiKey) {
      requestOptions.headers['Authorization'] = `Bearer ${apiKey}`;
    }

    console.log('Calling external API:', apiUrl);

    // Call external API
    const response = await fetch(apiUrl, requestOptions);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('External API error:', response.status, errorText);
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({ 
          error: '外部APIからエラーが返されました',
          details: errorText
        })
      };
    }

    const data = await response.json();

    // Return the response
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(data)
    };

  } catch (error) {
    console.error('Error in get-quotes function:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'サーバーエラーが発生しました',
        details: error.message 
      })
    };
  }
};
