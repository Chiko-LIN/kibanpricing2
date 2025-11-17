(function(){
  function onReady(fn){ if (document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }
  onReady(function(){
    if (!window.location.pathname.includes('/admin')) {
      // only run in admin
      return;
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
      var i, s, el;
      for (i = 0; i < selectors.length; i++) {
        s = selectors[i];
        el = document.querySelector(s);
        if (el && el.value && el.value.trim()) return el.value.trim();
      }
      // fallback: try to find field labeled '永久链接' or placeholder that looks like a path
      var labels = Array.from(document.querySelectorAll('label')).filter(function(l){ return /永久链接|permalink/i.test(l.textContent); });
      if (labels.length) {
        var forId = labels[0].getAttribute('for');
        if (forId) {
          el = document.getElementById(forId);
          if (el && el.value && el.value.trim()) return el.value.trim();
        }
      }
      return '';
    }

    // 等待编辑器加载完成
    var checkInterval = setInterval(function() {
      // 查找正文(body)字段的编辑器容器
      var bodyField = null;
      var allTextareas = document.querySelectorAll('textarea, [class*="Editor"]');
      
      // 尝试找到markdown编辑器或正文字段
      for (var i = 0; i < allTextareas.length; i++) {
        var el = allTextareas[i];
        var label = null;
        var parent = el.parentElement;
        
        // 向上查找标签
        while (parent && !label) {
          label = parent.querySelector('label');
          if (label && /正文|body|content/i.test(label.textContent)) {
            bodyField = parent;
            break;
          }
          parent = parent.parentElement;
        }
        
        if (bodyField) break;
      }
      
      // 如果找不到正文字段，使用编辑器的主容器
      if (!bodyField) {
        bodyField = document.querySelector('[class*="EditorContainer"]') || 
                    document.querySelector('[class*="Editor-editor"]') ||
                    document.querySelector('#nc-root');
      }
      
      if (!bodyField) return; // 还未加载，继续等待
      
      clearInterval(checkInterval); // 停止轮询

      // 创建按钮容器
      var buttonContainer = document.createElement('div');
      buttonContainer.style.marginTop = '16px';
      buttonContainer.style.marginBottom = '16px';
      buttonContainer.style.padding = '12px';
      buttonContainer.style.borderTop = '1px solid #ddd';
      buttonContainer.className = 'custom-action-buttons';

      var btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = 'Save & Open Page';
      btn.style.marginRight = '8px';
      btn.style.padding = '8px 16px';
      btn.style.cursor = 'pointer';
      btn.style.backgroundColor = '#3b5998';
      btn.style.color = 'white';
      btn.style.border = 'none';
      btn.style.borderRadius = '4px';
      btn.className = 'save-open-btn';

      buttonContainer.appendChild(btn);
      
      // 在正文字段后插入按钮
      if (bodyField.nextSibling) {
        bodyField.parentNode.insertBefore(buttonContainer, bodyField.nextSibling);
      } else {
        bodyField.parentNode.appendChild(buttonContainer);
      }
      
      // 按钮点击处理
      btn.addEventListener('click', function(){
        // open popup immediately to avoid popup blockers (user gesture)
        var popup = window.open('about:blank', '_blank');

        // read current permalink (may be empty or unsaved)
        var permalink = readPermalinkFromForm();

        // 查找Save按钮
        var allButtons = Array.from(document.querySelectorAll('button'));
        var saveBtn = allButtons.find(function(b){ return /save|保存/i.test((b.textContent||'').trim()); });

        // trigger Save button if found
        if (saveBtn) {
          try { saveBtn.click(); }
          catch(e){ /* Could not click save button programmatically */ }
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
          var i, n, txt;
          for (i = 0; i < notifications.length; i++) {
            n = notifications[i];
            txt = (n.textContent||'').trim();
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
              if (popup && !popup.closed) {
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
    }, 500); // 每500ms检查一次

    // 设置超时以防止无限循环
    setTimeout(function() {
      clearInterval(checkInterval);
    }, 10000); // 10秒后停止尝试
  });
})();
