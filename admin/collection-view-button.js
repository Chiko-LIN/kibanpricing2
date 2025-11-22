(function(){
  function onReady(fn){ if (document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }
  
  onReady(function(){
    if (!window.location.pathname.includes('/admin')) {
      // only run in admin
      return;
    }

    // Function to add View buttons to collection entries
    function addViewButtons() {
      // Check if we're on the pages collection view
      if (!window.location.hash.includes('/collections/pages')) {
        return;
      }

      // Find all collection entries in the list view
      // Try multiple selectors to find entries
      var entries = document.querySelectorAll('[class*="ListCard"], [class*="CardWrapper"], [class*="card-"], li[class*="entry"]');
      
      if (entries.length === 0) {
        // Try alternative approach - find all links that might be entry cards
        entries = Array.from(document.querySelectorAll('a[href*="/collections/pages/entries/"]'))
          .map(function(link) {
            return link.closest('[class*="Card"]') || link.closest('li') || link.closest('div[class*="entry"]');
          })
          .filter(function(card) {
            return card && !card.querySelector('.custom-view-button');
          });
      }
      
      Array.from(entries).forEach(function(entry) {
        // Skip if we already added a button to this entry
        if (entry.querySelector('.custom-view-button')) {
          return;
        }

        // Try to find the permalink data
        var permalink = null;
        
        // Look for permalink in the card text
        var allText = entry.textContent || '';
        
        // Method 1: Look for explicit permalink field
        var lines = allText.split('\n');
        for (var i = 0; i < lines.length; i++) {
          var line = lines[i].trim();
          // Look for permalink pattern
          if (line.includes('permalink') || line.includes('永久链接')) {
            // Next line might have the value
            if (i + 1 < lines.length) {
              var nextLine = lines[i + 1].trim();
              if (nextLine.startsWith('/')) {
                permalink = nextLine;
                break;
              }
            }
            // Or same line after colon
            var match = line.match(/permalink[:\s]+([^\s]+)/i);
            if (match && match[1] && match[1].startsWith('/')) {
              permalink = match[1];
              break;
            }
          }
          // Method 2: Direct path detection
          if (line.startsWith('/') && line.length > 1 && line.length < 100 && !line.includes(' ')) {
            permalink = line;
            break;
          }
        }

        // Method 3: Look in all small text elements
        if (!permalink) {
          var textElements = entry.querySelectorAll('p, span, div');
          for (var j = 0; j < textElements.length; j++) {
            var elem = textElements[j];
            var text = elem.textContent.trim();
            // Check if this looks like a permalink
            if (text.startsWith('/') && text.length > 1 && text.length < 100 && !text.includes('\n') && text.match(/^\/[a-z0-9/-]+\/?$/i)) {
              permalink = text;
              break;
            }
          }
        }

        // If we found a permalink, add the view button
        if (permalink) {
          var buttonContainer = document.createElement('div');
          buttonContainer.className = 'custom-view-button-container';
          buttonContainer.style.cssText = 'position: absolute; top: 10px; right: 10px; z-index: 10;';

          var viewButton = document.createElement('button');
          viewButton.className = 'custom-view-button';
          viewButton.textContent = 'View';
          viewButton.title = 'View page: ' + permalink;
          viewButton.style.cssText = 'padding: 6px 12px; background-color: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 13px; font-weight: 500; transition: background-color 0.2s; box-shadow: 0 1px 3px rgba(0,0,0,0.2);';
          
          // Store permalink as data attribute
          viewButton.setAttribute('data-permalink', permalink);
          
          // Hover effect
          viewButton.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#2563eb';
            this.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3)';
          });
          viewButton.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#3b82f6';
            this.style.boxShadow = '0 1px 3px rgba(0,0,0,0.2)';
          });

          // Click handler
          viewButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            var url = this.getAttribute('data-permalink');
            
            // Normalize URL - remove trailing spaces/newlines
            url = url.trim();
            
            // Ensure it starts with /
            if (!/^(https?:)?\/\//.test(url) && url.charAt(0) !== '/') {
              url = '/' + url;
            }
            
            // If it's a relative path, construct full URL
            if (/^\/(?!\/)/.test(url)) {
              // Use the base site URL
              var baseUrl = window.location.origin.replace(/\/$/, '');
              url = baseUrl + url;
            }
            
            // Open in new window
            window.open(url, '_blank');
          });

          buttonContainer.appendChild(viewButton);
          
          // Make sure the entry has relative positioning
          var entryPosition = window.getComputedStyle(entry).position;
          if (entryPosition === 'static') {
            entry.style.position = 'relative';
          }
          
          entry.appendChild(buttonContainer);
        }
      });
    }

    // Use MutationObserver to watch for collection list changes
    var debounceTimeout = null;
    
    function watchForCollectionList() {
      var observer = new MutationObserver(function() {
        // Debounce the calls
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(function() {
          if (window.location.hash.includes('/collections/pages')) {
            addViewButtons();
          }
        }, 300);
      });

      // Start observing the document body for changes
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      // Run after initial delays to catch entries as they load
      setTimeout(addViewButtons, 1000);
      setTimeout(addViewButtons, 3000);
    }

    // Start watching after a short delay to let CMS initialize
    setTimeout(watchForCollectionList, 500);
    
    // Also watch for hash changes (navigation within CMS)
    window.addEventListener('hashchange', function() {
      setTimeout(addViewButtons, 500);
      setTimeout(addViewButtons, 1500);
    });
  });
})();
