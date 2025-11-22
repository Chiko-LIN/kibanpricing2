# Visual Guide: View Button in CMS Collection View

## What You'll See

When you navigate to `/admin/#/collections/pages`, each landing page entry will look like this:

```
┌────────────────────────────────────────────────────────┐
│                                             ┌────────┐ │
│  Test                                       │  View  │ │ <- Blue button
│  /ja/pricing                                └────────┘ │
│                                                        │
│  Layout: landing                                       │
│  Title: Test                                           │
│  Permalink: /ja/pricing                                │
│  Show in nav: true                                     │
│                                                        │
└────────────────────────────────────────────────────────┘
```

## Button Appearance

### Normal State
- **Text**: "View"
- **Background**: Blue (#3b82f6)
- **Position**: Top-right corner of the card
- **Shadow**: Subtle drop shadow
- **Size**: Compact, doesn't take much space

### Hover State
- **Background**: Darker blue (#2563eb)
- **Shadow**: Slightly more prominent
- **Cursor**: Pointer (hand icon)
- **Tooltip**: Shows "View page: /your-permalink"

### Click Behavior
- Opens the page in a new browser tab/window
- Doesn't interfere with clicking the entry card to edit

## Real-World Examples

### Example 1: Japanese Pricing Page
```
Entry Card:
┌────────────────────────────────────────────────────────┐
│                                             ┌────────┐ │
│  Test                                       │  View  │ │
│  /ja/pricing                                └────────┘ │
│  ...                                                   │
└────────────────────────────────────────────────────────┘

Clicking "View" opens: https://melodious-gingersnap-eedd0f.netlify.app/ja/pricing
```

### Example 2: Another Landing Page
```
Entry Card:
┌────────────────────────────────────────────────────────┐
│                                             ┌────────┐ │
│  Test 1                                     │  View  │ │
│  /ja/pricing                                └────────┘ │
│  ...                                                   │
└────────────────────────────────────────────────────────┘

Clicking "View" opens: https://melodious-gingersnap-eedd0f.netlify.app/ja/pricing
```

## Workflow Enhancement

### Before (Without View Button)
1. See landing page entry in list
2. Remember or copy the permalink
3. Open new tab manually
4. Type or paste the URL
5. View the page

### After (With View Button)
1. See landing page entry in list
2. Click the "View" button
3. ✨ Page opens instantly in new window!

## Notes
- The button only appears for entries that have a valid permalink configured
- The button works immediately after creating or editing a page
- Multiple pages can be previewed by clicking different View buttons
- The button is styled to match modern web UI conventions
