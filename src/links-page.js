// src/links-page.js
function setLang(newLang){
  localStorage.setItem('lang', newLang);
  document.documentElement.setAttribute('lang', newLang);

  const sInline = document.getElementById('lang');
  const sPanel  = document.getElementById('lang-panel');
  if (sInline && sInline.value !== newLang) sInline.value = newLang;
  if (sPanel  && sPanel.value  !== newLang) sPanel.value  = newLang;

  if (window.__i18n) window.__i18n.apply(newLang);
  window.dispatchEvent(new CustomEvent('langchange', { detail: { lang: newLang } }));

  window.dispatchEvent(new Event('langchange'));
}
if (window.__i18n) window.__i18n.apply(window.__i18n.lang());
function markActive(){
  const file = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const hash = location.hash;
  document.querySelectorAll('.nav a, .nav-col a').forEach(a => {
    const href = (a.getAttribute('href') || '').trim();
    const hrefFile = href.endsWith('.html') ? href.split('/').pop().toLowerCase() : '';
    const isHash  = href.startsWith('#') && href === hash;
    const isFile  = hrefFile && hrefFile === file;
    const isHome  = !hash && (file === '' || file === 'index.html') && href === 'index.html';
    a.classList.toggle('active', isHash || isFile || isHome);
  });
}
