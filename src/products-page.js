
// src/products-page.js

(function(){
  const $grid = document.getElementById('catalog-grid');
  const YEAR = document.getElementById('year');
  if (YEAR) YEAR.textContent = new Date().getFullYear();

  // ---- язык берём динамически каждый раз
  const currentLang = () =>
    (window.__i18n?.lang?.()) || localStorage.getItem('lang') || document.documentElement.lang || 'uk';

  // ---- взять строку из объекта переводов {uk, en, ...} или вернуть как есть
  function t(obj){
    const L = currentLang();
    if (!obj || typeof obj === 'string') return obj || '';
    return obj[L] || obj.uk || obj.en || Object.values(obj)[0] || '';
  }

  // ---- UI-строки из словаря (кнопки и т.п.)
  const tt = (key) => window.__i18n ? window.__i18n.t(key, currentLang()) : key;

  function priceBlock(p){
    const price = p.price;
    const discount = p.discount;
    const old = discount ? Math.round(price / (1 - discount/100)) : null;
    const parts = [];
    parts.push(`<span class="price">${price} ₴</span>`);
    if (old) parts.push(`<span class="old-price">${old} ₴</span>`);
    if (p.hot) parts.push(`<span class="badge red">HOT</span>`);
    if (p.madeBy) parts.push(`<span class="badge made">Made by Admin Inc.</span>`);
    return parts.join('');
  }

  function card(p){
    const img = (p.img && p.img[0]) || 'public/images/image.webp';
    return `
      <article class="card">
        <img src="${img}" alt="">
        <div class="pad">
          <h4>${t(p.title)}</h4>
          <p class="muted">${t(p.descShort)}</p>
          <div class="price-row">${priceBlock(p)}</div>
          <div class="hero-actions">
            <a class="btn brand-ghost" href="index.html#/product/${p.id}">${tt('btn.details')}</a>
            <a class="btn outline" href="${p.olx}" target="_blank" rel="noopener" data-olx>${tt('btn.buy')}</a>
          </div>
        </div>
      </article>
    `;
  }

  let LIST = [];

  async function load(){
    if (!LIST.length){
      const res = await fetch('./src/data/products.json');
      if (!res.ok) throw new Error('Failed to load products.json');
      LIST = await res.json();
    }
    render();
  }

  function render(){
    if (!$grid) return;
    $grid.innerHTML = LIST.map(card).join('');
    if (window.__i18n) window.__i18n.apply(currentLang());
  }

  // document.body.addEventListener('click', function(e){
  //   const a = e.target.closest('a[data-olx]');
  //   if (!a) return;
  //   const msg = window.__i18n
  //     ? window.__i18n.t('modal.leave.text', currentLang())
  //     : 'Ви переходите на зовнішнє посилання:';
  //   const ok = confirm(`${msg} ${a.href}`);
  //   if (!ok){ e.preventDefault(); }
  // });

  // ---- init & events
  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', load);
  }else{
    load();
  }

  window.addEventListener('langchange', ()=>{
    render();
  });
})();
document.addEventListener('DOMContentLoaded', ()=>{
  if (window.__i18n) window.__i18n.apply(window.__i18n.lang());
});
window.addEventListener('langchange', ()=>{
  if (window.__i18n) window.__i18n.apply(window.__i18n.lang());
  load();
});
