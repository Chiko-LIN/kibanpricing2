(function () {
  window.LangSwitch = window.LangSwitch || {};
  function getCurrentLang() {
    var path = window.location.pathname.replace(/^\/+/, '').split('/');
    var first = path[0];
    if (first === 'en' || first === 'ja') return first;
    return document.documentElement.lang && document.documentElement.lang.indexOf('en') === 0 ? 'en' : 'ja';
  }
  function getRestPath() {
    var path = window.location.pathname.replace(/^\/+/, '').split('/');
    if (path[0] === 'en' || path[0] === 'ja') path.shift();
    var rest = '/' + path.join('/');
    if (rest === '/') rest = '/';
    return rest;
  }
  function buildUrl(lang) {
    var rest = getRestPath();
    var search = window.location.search || '';
    return '/' + lang + rest + search;
  }
  function onChange(e) {
    var lang = e.target.value;
    try { localStorage.setItem('site_lang', lang); } catch (err) {}
    window.location.href = buildUrl(lang);
  }
  function init() {
    var sel = document.getElementById('lang-select');
    if (!sel) return;
    var stored = null;
    try { stored = localStorage.getItem('site_lang'); } catch (err) {}
    var cur = stored || getCurrentLang();
    sel.value = cur;
  }
  window.LangSwitch.onChange = onChange;
  window.LangSwitch.init = init;
  document.addEventListener('DOMContentLoaded', init);
})();
