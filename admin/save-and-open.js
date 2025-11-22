(function(){
  function onReady(fn){ if (document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }
  onReady(function(){
    if (!window.location.pathname.includes('/admin')) {
      // only run in admin
    }

    var toolbar = document.querySelector('.nc-entry-toolbar') || document.querySelector('#nc-root') || document.body;

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = 'Save & Open Page';
    btn.style.marginLeft = '8px';
    btn.style.padding = '6px 10px';
    btn.style.cursor = 'pointer';
    btn.className = 'save-open-btn';

    // try to insert next to existing Save button
    var allButtons = Array.from(document.querySelectorAll('button'));
    var saveBtn = allButtons.find(function(b){ return /save/i.test((b.textContent||'').trim()); });
    if (saveBtn && saveBtn.parentNode) {
      saveBtn.parentNode.insertBefore(btn, saveBtn.nextSibling);
    } else {
      toolbar.appendChild(btn);
    }

    function readPermalinkFromForm() {
      // try several selectors to find permalink input/textarea
      var selectors = [
        'input[name="permalink"]',
        'textarea[name="permalink"]',
        'input[id*="permalink"]',
        'textarea[id*="permalink"]',
        'input[name$="permalink"]',
        'textarea[name$="permalink"]'
      ];
      for (var i = 0; i < selectors.length; i++) {
        var el = document.querySelector(selectors[i]);
        if (el && el.value && el.value.trim()) return el.value.trim();
      }
      // fallback: try to find field labeled '永久链接' or placeholder that looks like a path
      var labels = Array.from(document.querySelectorAll('label')).filter(function(l){ return /永久链接|permalink/i.test(l.textContent); });
      if (labels.length) {
        var forId = labels[0].getAttribute('for');
        if (forId) {
          var el = document.getElementById(forId);
          if (el && el.value && el.value.trim()) return el.value.trim();
        }
      }
      return '';
    }

    btn.addEventListener('click', function(){
      // open popup immediately to avoid popup blockers (user gesture)
      var popup = window.open('about:blank', '_blank');

      // read current permalink (may be empty or unsaved)
      var permalink = readPermalinkFromForm();

      // trigger Save button if found
      if (saveBtn) {
        try { saveBtn.click(); }
        catch(e){ console.warn('Could not click save button programmatically', e); }
      }

      // Poll for save completion (detect via DOM changes or timeout).
      // We will poll up to maxAttempts times, interval ms apart.
      var attempts = 0;
      var maxAttempts = 30; // ~15s with 500ms interval
      var intervalMs = 500;
      var poll = setInterval(function(){
        attempts++;
        // attempt to detect "Saved" or similar text in the UI
        var savedDetected = false;
        // common notification elements
        var notifications = Array.from(document.querySelectorAll('.nc-notification, .nc-notifications, .notification, .editor-status, .nc-entry-status'));
        for (var n = 0; n < notifications.length; n++) {
          var txt = (notifications[n].textContent||'').trim();
          if (/saved|已保存|保存完成|保存/i.test(txt)) { savedDetected = true; break; }
        }
        // also check Save button text toggles
        if (!savedDetected && saveBtn) {
          var t = (saveBtn.textContent||'').trim();
          if (/saved|已保存|保存完成/i.test(t)) savedDetected = true;
        }

        if (savedDetected || attempts >= maxAttempts) {
          clearInterval(poll);
          // re-read permalink in case it changed
          if (!permalink) permalink = readPermalinkFromForm();

          if (!permalink) {
            var msg = '<p>无法读取 permalink，请确认编辑器中已填写"永久链接 (permalink)"字段并保存。</p>';
            if (popup && !popup.closed && popup.document && popup.document.body) {
              popup.document.body.innerHTML = msg;
            } else {
              alert('无法读取 permalink，请确认编辑器中已填写"永久链接 (permalink)"字段并保存。');
            }
            return;
          }

          // normalize permalink -> full URL if necessary
          if (!/^(https?:)?\/\//.test(permalink) && permalink.charAt(0) !== '/') {
            permalink = '/' + permalink;
          }
          var url = permalink;
          if (/^\/(?!\/)/.test(permalink)) url = location.origin.replace(/\/$/,'') + permalink;

          try {
            if (popup && !popup.closed) {
              popup.location.href = url;
            } else {
              window.open(url, '_blank');
            }
          } catch (e) {
            window.open(url, '_blank');
          }
        }
      }, intervalMs);
    });
  });
})();
