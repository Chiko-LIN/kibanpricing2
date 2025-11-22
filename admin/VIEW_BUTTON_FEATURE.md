# View Button Feature for CMS Landing Pages

## Overview
A "View" button has been added to each landing page entry in the Netlify CMS collection view. This allows content editors to quickly preview their landing pages without having to manually navigate to them.

## Location
The feature appears at: `/admin/#/collections/pages`

## User Experience

### Before
- Users had to remember the permalink URL
- Manual navigation to test pages
- No quick preview option from the collection list

### After
- Each landing page entry displays a blue "View" button in the top-right corner
- Click the button to instantly preview the page in a new window
- Hover effect provides visual feedback
- Tooltip shows the permalink URL

## How to Use

1. Navigate to the CMS admin panel at `/admin/`
2. Click on "着陆页" (Landing Pages) collection
3. Each landing page entry now displays a blue "View" button in the top-right corner
4. Click the "View" button to open the page in a new window
5. The button will only appear for pages that have a valid permalink configured

## Technical Implementation

### Files Modified
- `/admin/index.html` - Added script reference for the new feature
- `/admin/collection-view-button.js` - New script implementing the view button functionality
- `/admin/VIEW_BUTTON_FEATURE.md` - This documentation file

### How It Works

#### 1. Detection
- Uses `MutationObserver` to detect when the collection list loads
- Watches for URL hash changes to detect navigation within the CMS
- Debounced to avoid excessive DOM operations

#### 2. Entry Identification
- Searches for collection entries using multiple selector strategies
- Falls back to finding links to `/collections/pages/entries/`
- Prevents duplicate buttons with duplicate detection

#### 3. Permalink Extraction
The script uses three methods to find the permalink:
1. **Explicit field detection**: Looks for "permalink" or "永久链接" labels
2. **Direct path detection**: Finds lines starting with `/` that look like URLs
3. **Element scanning**: Searches text elements for valid URL patterns

#### 4. Button Creation
- Creates a blue button with white text
- Positions absolutely in top-right corner
- Adds hover effects and tooltips
- Stores permalink in data attribute

#### 5. Navigation
- Normalizes relative URLs to absolute URLs
- Opens in new window using `window.open()`
- Prevents event propagation to avoid triggering entry edit

### Button Styling
- **Color**: Blue (#3b82f6)
- **Hover**: Darker blue (#2563eb)
- **Position**: Absolute, top-right (10px from top and right)
- **Size**: 6px vertical padding, 12px horizontal padding
- **Font**: 13px, weight 500
- **Shadow**: Subtle shadow that intensifies on hover

### Code Quality
- ✅ No ESLint errors introduced
- ✅ No security vulnerabilities (CodeQL verified)
- ✅ Uses IIFE pattern to avoid global scope pollution
- ✅ Compatible with existing admin scripts
- ✅ Follows existing code style conventions
- ✅ Optimized array operations
- ✅ Proper debouncing for performance

## Testing

### Manual Testing Steps
1. Deploy the changes to your Netlify site
2. Navigate to `https://melodious-gingersnap-eedd0f.netlify.app/admin/`
3. Click on "着陆页" (Landing Pages) collection
4. Verify that each landing page entry shows a "View" button
5. Click a "View" button and verify:
   - The correct page opens in a new window
   - The URL matches the permalink field
   - The button doesn't interfere with editing entries

### Expected Behavior
- ✅ View button appears on all pages with valid permalinks
- ✅ Button opens correct page in new window
- ✅ Button doesn't appear on pages without permalinks
- ✅ Button doesn't interfere with clicking the entry to edit
- ✅ Hover effect works smoothly
- ✅ Tooltip shows the permalink

## Browser Compatibility
- Works in all modern browsers that support:
  - ES5 JavaScript (Chrome, Firefox, Safari, Edge)
  - MutationObserver API (all modern browsers)
  - CSS3 transitions and positioning

## Maintenance
- The script automatically adapts to Netlify CMS's dynamic class names
- No manual updates needed when CMS is updated (unless major DOM changes occur)
- If CMS structure changes significantly, may need to update selectors in lines 19-29

## Future Enhancements (Optional)
- Add keyboard shortcut for quick preview
- Add "View in New Tab" vs "View in New Window" option
- Add preview button to other collections (blog posts, etc.)
- Add edit URL button to open page in edit mode
- Add status indicator showing if page is published or draft
