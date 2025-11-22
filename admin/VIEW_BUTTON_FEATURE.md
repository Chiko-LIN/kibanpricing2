# View Button Feature for CMS Landing Pages

## Overview
A "View" button has been added to each landing page entry in the Netlify CMS collection view.

## Location
The feature appears at: `/admin/#/collections/pages`

## How It Works

### User Experience
1. Navigate to the CMS admin panel at `/admin/`
2. Click on "着陆页" (Landing Pages) collection
3. Each landing page entry now displays a blue "View" button in the top-right corner
4. Click the "View" button to open the page in a new window

### Technical Implementation

#### Files Modified
- `/admin/index.html` - Added script reference for the new feature
- `/admin/collection-view-button.js` - New script implementing the view button functionality

#### How It Works
1. **Detection**: Uses MutationObserver to detect when the collection list loads
2. **Parsing**: Extracts the permalink field from each entry's text content
3. **Button Creation**: Dynamically adds a "View" button to each entry card
4. **URL Construction**: Converts relative permalinks to absolute URLs
5. **Navigation**: Opens the page in a new window when clicked

#### Key Features
- ✅ Works with Netlify CMS's dynamic class names
- ✅ Automatically detects new entries as they load
- ✅ Prevents duplicate buttons on existing entries
- ✅ Handles both relative and absolute URLs
- ✅ Includes hover effects for better UX
- ✅ Non-intrusive - doesn't interfere with entry editing

#### Button Styling
- **Color**: Blue (#3b82f6)
- **Hover**: Darker blue (#2563eb)
- **Position**: Absolute, top-right of entry card
- **Size**: 6px vertical padding, 12px horizontal padding
- **Font**: 13px, weight 500

## Testing

To test the feature:
1. Deploy the changes to your Netlify site
2. Navigate to `https://melodious-gingersnap-eedd0f.netlify.app/admin/#/collections/pages`
3. Verify that each landing page entry shows a "View" button
4. Click a "View" button and verify it opens the correct page in a new window

## Code Quality
- ✅ No ESLint errors introduced
- ✅ Uses IIFE pattern to avoid global scope pollution
- ✅ Compatible with existing admin scripts
- ✅ Follows existing code style conventions
