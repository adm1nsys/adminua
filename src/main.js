// ==============================
// Admin Inc. UA - main.js
// ==============================

(function(){
  const DICT = {
    uk: {
      brand:"Admin Store UA",
      "nav.home":"Головна","nav.products":"Продукти","nav.links":"Посилання","nav.about":"Про нас",
      "hero.hot":"Гаряча пропозиція","hero.new":"Новинка",
      "btn.details":"Деталі","btn.buy":"Купити на OLX",
      "top.title":"Топ 5 новинок",
      "tech.title":"Технологія виготовлення","tech.subtitle":"Стабільна якість з першої деталі",
      "tech.body":"Друкую на Creality K1C: швидко, точно, чиста геометрія. Контроль температур, калібрування та ретельно підібрані профілі друку гарантують рівні поверхні.",
      "quality.title":"Про якість","quality.subtitle":"Матеріал і міцність — без компромісів",
      "quality.body":"Використовую PETG від Creality (Generic) — стійкий до ударів і температур. Не економлю на заповненні — вироби роблю міцними, щоб служили довго.",
      "btn.download":"Скачати",
      back:"Продукти",
      "modal.leave.title":"Покинути сайт?","modal.leave.text":"Ви переходите за зовнішнім посиланням:","modal.leave.no":"Ні","modal.leave.yes":"Так",
      "footer.tagline":"3D-друк з увагою до деталей","footer.links":"Посилання",
      "products.title":"Усі продукти",
      "title.home":"Admin Store UA","title.products":"Admin Inc. — Продукти","title.product":"Admin Inc. — Продукт"
    },
    en: {
      brand:"Admin Store UA",
      "nav.home":"Home","nav.products":"Products","nav.links":"Links","nav.about":"About",
      "hero.hot":"Hot deal","hero.new":"New",
      "btn.details":"Details","btn.buy":"Buy on OLX",
      "top.title":"Top 5 new items",
      "tech.title":"Manufacturing technology","tech.subtitle":"Consistent quality from the first part",
      "tech.body":"I print on Creality K1C: fast, accurate, clean geometry. Temperature control, calibration, and tuned profiles ensure flat surfaces.",
      "quality.title":"About quality","quality.subtitle":"Material and strength — no compromises",
      "quality.body":"I use Creality (Generic) PETG — impact and heat resistant. I don't skimp on infill — parts are made strong to last.",
      "btn.download":"Download",
      back:"Products",
      "modal.leave.title":"Leave the site?","modal.leave.text":"You are going to an external link:","modal.leave.no":"No","modal.leave.yes":"Yes",
      "footer.tagline":"3D printing with attention to detail","footer.links":"Links",
      "products.title":"All products",
      "title.home":"Admin Store UA","title.products":"Admin Inc. — Products","title.product":"Admin Inc. — Product"
    },
    de: {
      brand:"Admin Store UA",
      "nav.home":"Startseite","nav.products":"Produkte","nav.links":"Links","nav.about":"Über uns",
      "hero.hot":"Top-Angebot","hero.new":"Neu",
      "btn.details":"Details","btn.buy":"Bei OLX kaufen",
      "top.title":"Top 5 Neuheiten",
      "tech.title":"Fertigungstechnologie","tech.subtitle":"Konstante Qualität ab dem ersten Teil",
      "tech.body":"Ich drucke auf Creality K1C: schnell, präzise, saubere Geometrie. Temperaturkontrolle, Kalibrierung und abgestimmte Profile sorgen für glatte Oberflächen.",
      "quality.title":"Über die Qualität","quality.subtitle":"Material und Festigkeit — ohne Kompromisse",
      "quality.body":"Ich verwende PETG von Creality (Generic) — schlag- und hitzebeständig. Am Infill spare ich nicht — die Teile sind langlebig.",
      "btn.download":"Herunterladen",
      back:"Produkte",
      "modal.leave.title":"Seite verlassen?","modal.leave.text":"Sie öffnen einen externen Link:","modal.leave.no":"Nein","modal.leave.yes":"Ja",
      "footer.tagline":"3D-Druck mit Liebe zum Detail","footer.links":"Links",
      "products.title":"Alle Produkte",
      "title.home":"Admin Store UA","title.products":"Admin Inc. — Produkte","title.product":"Admin Inc. — Produkt"
    },
    pl: {
      brand:"Admin Store UA",
      "nav.home":"Strona główna","nav.products":"Produkty","nav.links":"Linki","nav.about":"O nas",
      "hero.hot":"Gorąca oferta","hero.new":"Nowość",
      "btn.details":"Szczegóły","btn.buy":"Kup na OLX",
      "top.title":"Top 5 nowości",
      "tech.title":"Technologia wytwarzania","tech.subtitle":"Stabilna jakość od pierwszej części",
      "tech.body":"Drukuję na Creality K1C: szybko, dokładnie, czysta geometria. Kontrola temperatur, kalibracja i dopracowane profile gwarantują równe powierzchnie.",
      "quality.title":"O jakości","quality.subtitle":"Materiał i wytrzymałość — bez kompromisów",
      "quality.body":"Używam PETG Creality (Generic) — odporny na uderzenia i temperaturę. Nie oszczędzam na wypełnieniu — elementy są trwałe.",
      "btn.download":"Pobierz",
      back:"Produkty",
      "modal.leave.title":"Opuścić stronę?","modal.leave.text":"Przechodzisz do zewnętrznego linku:","modal.leave.no":"Nie","modal.leave.yes":"Tak",
      "footer.tagline":"Druk 3D z dbałością o detale","footer.links":"Linki",
      "products.title":"Wszystkie produkty",
      "title.home":"Admin Store UA","title.products":"Admin Inc. — Produkty","title.product":"Admin Inc. — Produkt"
    },
    cs: {
      brand:"Admin Store UA",
      "nav.home":"Domů","nav.products":"Produkty","nav.links":"Odkazy","nav.about":"O nás",
      "hero.hot":"Horká nabídka","hero.new":"Novinka",
      "btn.details":"Detail","btn.buy":"Koupit na OLX",
      "top.title":"Top 5 novinek",
      "tech.title":"Technologie výroby","tech.subtitle":"Stabilní kvalita od první součásti",
      "tech.body":"Tisknu na Creality K1C: rychle, přesně, čistá geometrie. Řízení teplot, kalibrace a laděné profily zajišťují rovné povrchy.",
      "quality.title":"O kvalitě","quality.subtitle":"Materiál a pevnost — bez kompromisů",
      "quality.body":"Používám PETG od Creality (Generic) — odolný proti nárazu a teplu. Na výplni nešetřím — díly jsou pevné a vydrží.",
      "btn.download":"Stáhnout",
      back:"Produkty",
      "modal.leave.title":"Opustit web?","modal.leave.text":"Přecházíte na externí odkaz:","modal.leave.no":"Ne","modal.leave.yes":"Ano",
      "footer.tagline":"3D tisk s důrazem na detail","footer.links":"Odkazy",
      "products.title":"Všechny produkty",
      "title.home":"Admin Store UA","title.products":"Admin Inc. — Produkty","title.product":"Admin Inc. — Produkt"
    },
    da: {
      brand:"Admin Store UA",
      "nav.home":"Hjem","nav.products":"Produkter","nav.links":"Links","nav.about":"Om os",
      "hero.hot":"Varmt tilbud","hero.new":"Nyhed",
      "btn.details":"Detaljer","btn.buy":"Køb på OLX",
      "top.title":"Top 5 nyheder",
      "tech.title":"Fremstillingsteknologi","tech.subtitle":"Stabil kvalitet fra første del",
      "tech.body":"Jeg printer på Creality K1C: hurtigt, præcist, ren geometri. Temperaturstyring, kalibrering og tilpassede profiler giver jævne overflader.",
      "quality.title":"Om kvalitet","quality.subtitle":"Materiale og styrke — uden kompromiser",
      "quality.body":"Jeg bruger Creality (Generic) PETG — slag- og varmebestandigt. Jeg sparer ikke på infill — delene er stærke og holdbare.",
      "btn.download":"Hent",
      back:"Produkter",
      "modal.leave.title":"Forlade siden?","modal.leave.text":"Du går til et eksternt link:","modal.leave.no":"Nej","modal.leave.yes":"Ja",
      "footer.tagline":"3D-print med fokus på detaljen","footer.links":"Links",
      "products.title":"Alle produkter",
      "title.home":"Admin Store UA","title.products":"Admin Inc. — Produkter","title.product":"Admin Inc. — Produkt"
    }
  };

  function deepMerge(target, src){
    target = target || {};
    for (const k of Object.keys(src)){
      const v = src[k];
      if (v && typeof v === 'object' && !Array.isArray(v)){
        target[k] = deepMerge(target[k] || {}, v);
      } else {
        target[k] = v;
      }
    }
    return target;
  }

  const I = (window.__i18n = window.__i18n || {});
  I.dict = deepMerge(I.dict || {}, DICT);
  I.lang = I.lang || function(){
    return localStorage.getItem('lang') || document.documentElement.lang || 'uk';
  };
  I.t = function(key, lang){
    const langs = [lang, 'uk', 'en'];
    const getNested = (o,p)=>p.split('.').reduce((x,k)=> x && x[k]!=null ? x[k] : undefined, o);
    for (const code of langs){
      const L = this.dict[code] || {};
      if (Object.prototype.hasOwnProperty.call(L, key)) return L[key];
      const v = getNested(L, key);
      if (v != null) return v;
    }
    return '';
  };
  I.apply = function(lang){
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const k = el.getAttribute('data-i18n');
      const val = this.t(k, lang);
      if (val) el.textContent = val;
    });
    const onProductsPage = !!document.getElementById('catalog-grid');
    const viewProduct = document.getElementById('view-product');
    let titleKey = 'title.home';
    if (onProductsPage) titleKey = 'title.products';
    else if (viewProduct && !viewProduct.hidden) titleKey = 'title.product';
    const title = this.t(titleKey, lang);
    if (title) document.title = title;
  };
})();

const STATE = {
  products: [],
  lang: localStorage.getItem('lang') || (document.documentElement.lang || 'uk'),
};

function currentLang() {
  return STATE.lang;
}

function pick(val, lang = currentLang()) {
  if (val == null) return '';
  if (typeof val === 'string') return val;
  if (val[lang]) return val[lang];
  if (val.uk) return val.uk;
  if (val.en) return val.en;
  const first = Object.values(val)[0];
  return typeof first === 'string' ? first : '';
}

function pickArr(val, lang = currentLang()) {
  const v = pick(val, lang);
  return Array.isArray(v) ? v : (v ? [v] : []);
}

function pickDownload(val, lang = currentLang()) {
  if (!val) return '#';
  if (typeof val === 'string') return val;
  if (val[lang]) return val[lang];
  if (val.uk) return val.uk;
  if (val.en) return val.en;
  const first = Object.values(val)[0];
  return typeof first === 'string' ? first : '#';
}

function byDateDesc(a, b) {
  const da = Date.parse(a?.date || 0) || 0;
  const db = Date.parse(b?.date || 0) || 0;
  return db - da;
}

function formatPrice(uah) {
  if (typeof uah !== 'number') return '';
  return `${uah} ₴`;
}

function calcOldPrice(price, discount) {
  if (!price || !discount) return null;
  const old = Math.round(price / (1 - discount / 100));
  return isFinite(old) ? old : null;
}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function hideLoader() {
  const loader = document.getElementById('loader');
  if (loader) loader.classList.add('hidden');
}

function applyI18n(lang){ window.__i18n && window.__i18n.apply(lang); }

function showLangToast(val) {
  const toast = document.getElementById('lang-toast');
  const text = document.getElementById('lang-toast-text');
  if (!toast || !text) return;
  text.textContent = (val || '').toUpperCase();
  toast.hidden = false;
  setTimeout(() => (toast.hidden = true), 1200);
}

function setLang(newLang) {
  STATE.lang = newLang;
  localStorage.setItem('lang', newLang);
  const a = document.getElementById('lang');
  const b = document.getElementById('lang-panel');
  if (a) a.value = newLang;
  if (b) b.value = newLang;

  applyI18n(newLang);
  window.dispatchEvent(new CustomEvent('langchange', { detail: { lang: newLang } }));
  showLangToast(newLang);
}

async function mountHeader() {
  try {
    const res = await fetch('./header.html?ts=' + Date.now(), { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();

    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    const tpl = tmp.querySelector('#tpl-header');
    const root = document.getElementById('header-root');
    if (tpl && root) {
      if (!document.getElementById('tpl-header')) {
        document.body.appendChild(tpl);
      }
      root.innerHTML = '';
      const frag = document.getElementById('tpl-header').content.cloneNode(true);
      root.appendChild(frag);
    }
  } catch (e) {
    console.error('Failed to mount header.html', e);
  }

  bindBurgerWhenReady();
  bindLangSelects();
  markActiveLinks();
  window.addEventListener('hashchange', markActiveLinks);
}

function bindLangSelects() {
  const langTop = document.getElementById('lang');
  const langPane = document.getElementById('lang-panel');
  if (langTop) langTop.value = currentLang();
  if (langPane) langPane.value = currentLang();

  const onChange = (e) => setLang(e.target.value);
  langTop?.addEventListener('change', onChange);
  langPane?.addEventListener('change', onChange);
}

function bindBurgerWhenReady() {
  function bind() {
    const wrap = document.querySelector('.site-header-wrap');
    const btn = document.getElementById('menu-btn');
    const panel = document.getElementById('nav-panel');
    if (!wrap || !btn || !panel) return false;

    const applyCompact = () => {
      const compact = window.matchMedia('(max-width: 720px)').matches;
      wrap.classList.toggle('is-compact', compact);
      if (!compact) {
        panel.setAttribute('hidden', '');
        btn.setAttribute('aria-expanded', 'false');
      }
    };
    applyCompact();
    window.addEventListener('resize', applyCompact);

    if (!btn.dataset.bound) {
      btn.addEventListener('click', () => {
        const opened = !panel.hasAttribute('hidden');
        if (opened) {
          panel.setAttribute('hidden', '');
          btn.setAttribute('aria-expanded', 'false');
        } else {
          panel.removeAttribute('hidden');
          btn.setAttribute('aria-expanded', 'true');
        }
      });

      panel.addEventListener('click', (e) => {
        if (e.target.closest('a')) {
          panel.setAttribute('hidden', '');
          btn.setAttribute('aria-expanded', 'false');
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          panel.setAttribute('hidden', '');
          btn.setAttribute('aria-expanded', 'false');
        }
      });

      btn.dataset.bound = '1';
    }
    return true;
  }

  if (!bind()) {
    const mo = new MutationObserver(() => {
      if (bind()) mo.disconnect();
    });
    mo.observe(document.body, { childList: true, subtree: true });
  }
}

function markActiveLinks() {
  const hash = location.hash || '#/';
  document.querySelectorAll('.nav a, .nav-col a').forEach((a) => {
    const href = a.getAttribute('href') || '';
    const isActive = href === hash || (href === '#/' && (hash === '' || hash === '#/'));
    a.classList.toggle('active', isActive);
  });
}

async function loadProducts() {
  try {
    const res = await fetch('./src/data/products.json?ts=' + Date.now(), { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
    const text = await res.text();

    try {
      STATE.products = JSON.parse(text);
    } catch (parseErr) {
      const fixed = text
        .replace(/\bTrue\b/g, 'true')
        .replace(/\bFalse\b/g, 'false')
        .replace(/,\s*(\]|\})/g, '$1');
      try {
        STATE.products = JSON.parse(fixed);
        console.warn('products.json був не валідиым (True/False або зайві коми). Тимчасова санація сработала — будьласка, перевірте файл.');
      } catch (e2) {
        console.group('products.json parse failed');
        console.log('Response preview (first 200 chars):\n', text.slice(0, 200));
        console.groupEnd();
        throw e2;
      }
    }
  } catch (err) {
    console.error('Failed to load products.json', err);
    STATE.products = [];
  }
}

function routeId() {
  const m = (location.hash || '').match(/^#\/product\/(.+)$/);
  return m ? decodeURIComponent(m[1]) : null;
}

function toggleView(el, show) {
  if (!el) return;
  if (show) {
    el.hidden = false;            // снимаем hidden
    el.style.display = 'grid';    // показываем как grid
  } else {
    el.hidden = true;             // ставим hidden
    el.style.removeProperty('display'); // убираем inline-стиль display
  }
}

function route() {
  const id = routeId();
  const viewHome = document.getElementById('view-home');
  const viewProduct = document.getElementById('view-product');

  if (location.hash === '#/products') {
    toggleView(viewHome, true);
    toggleView(viewProduct, false);
    renderHome();
    requestAnimationFrame(() => scrollToId('products'));
    return;
  }

  if (id) {
    toggleView(viewHome, false);
    toggleView(viewProduct, true);
    renderProduct(id);
  } else {
    toggleView(viewHome, true);
    toggleView(viewProduct, false);
    renderHome();
  }

  function markActive(){
    const file = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const hash = location.hash || '';
    const isProductView = hash.startsWith('#/product/');

    document.querySelectorAll('.nav a, .nav-col a').forEach(a => {
      const href = (a.getAttribute('href') || '').trim();
      const hrefFile = href.endsWith('.html') ? href.split('/').pop().toLowerCase() : '';
      const isHash  = href.startsWith('#') && href === hash;
      const isFile  = hrefFile && hrefFile === file;
      const isHome  = !hash && (file === '' || file === 'index.html') && href === 'index.html';

      let active = isHash || isFile || isHome;

      if (isProductView) {
        active = (hrefFile === 'products.html');
      }

      a.classList.toggle('active', active);
    });
  }
  markActive();
}

function renderHome() {
  const list = [...STATE.products].sort(byDateDesc);

  // HOT
  const hot = list.find((p) => p.hot);
  const hotTitle = document.getElementById('hot-title');
  const hotDesc = document.getElementById('hot-desc');
  const hotPrice = document.getElementById('hot-price');
  const hotOld = document.getElementById('hot-old');
  const hotBadge = document.getElementById('hot-badge');
  const hotDetails = document.getElementById('hot-details');
  const hotLink = document.getElementById('hot-link');

  if (hot && hotTitle) {
    hotTitle.textContent = pick(hot.title);
    hotDesc && (hotDesc.textContent = pick(hot.descShort));
    const old = calcOldPrice(hot.price, hot.discount);
    hotPrice && (hotPrice.textContent = formatPrice(hot.price));
    if (hotOld) {
      if (old) {
        hotOld.textContent = formatPrice(old);
        hotOld.hidden = false;
      } else {
        hotOld.hidden = true;
      }
    }
    if (hotBadge) {
      hotBadge.textContent = 'HOT';
      hotBadge.hidden = !hot.hot;
    }
    if (hotDetails) hotDetails.href = `#/product/${encodeURIComponent(hot.id)}`;
    if (hotLink) {
      hotLink.href = hot.olx || '#';
      hotLink.setAttribute('data-olx', '');
    }
  }
  if (window.__i18n) window.__i18n.apply(window.__i18n.lang());

  // NEW
  const newest = list.find((p) => p.new && (!hot || p.id !== hot.id)) || list.find((p) => p.new);
  const newTitle = document.getElementById('new-title');
  const newDesc = document.getElementById('new-desc');
  const newDetails = document.getElementById('new-details');
  const newLink = document.getElementById('new-link');

  if (newest && newTitle) {
    newTitle.textContent = pick(newest.title);
    newDesc && (newDesc.textContent = pick(newest.descShort));
    if (newDetails) newDetails.href = `#/product/${encodeURIComponent(newest.id)}`;
    if (newLink) {
      newLink.href = newest.olx || '#';
      newLink.setAttribute('data-olx', '');
    }
  }

  // TOP 5
  const topGrid = document.getElementById('top-grid');
  if (topGrid) {
    const top5 = list.filter((p) => p.new).slice(0, 5);
    topGrid.innerHTML = top5
      .map((p) => {
        const img = (p.img && p.img[0]) || 'public/images/image.webp';
        const old = calcOldPrice(p.price, p.discount);
        return `
          <article class="card">
            <img src="${img}" alt="">
            <div class="pad">
              <h4>${pick(p.title)}</h4>
              <p class="muted">${pick(p.descShort)}</p>
              <div class="price-row">
                ${p.price ? `<span class="price">${formatPrice(p.price)}</span>` : ''}
                ${old ? `<span class="old-price">${formatPrice(old)}</span>` : ''}
                ${p.hot ? `<span class="badge red">HOT</span>` : ''}
                ${p.madeBy ? `<span class="badge made">Made by Admin Inc.</span>` : ''}
              </div>
              <div class="hero-actions">
                <a class="btn brand-ghost" href="#/product/${encodeURIComponent(p.id)}" data-i18n="btn.details">Деталі</a>
                <a class="btn outline" href="${p.olx || '#'}" target="_blank" rel="noopener" data-olx data-i18n="btn.buy">Купити на OLX</a>
              </div>
            </div>
          </article>
        `;
      })
      .join('');
  }
  if (window.__i18n) window.__i18n.apply(window.__i18n.lang());
}

function renderProduct(id) {
  const p = STATE.products.find((x) => x.id === id);
  if (!p) {
    location.hash = '#/';
    return;
  }

  const hero = document.getElementById('p-hero');
  const thumbs = document.getElementById('p-thumbs');
  const title = document.getElementById('p-title');
  const desc = document.getElementById('p-desc');
  const price = document.getElementById('p-price');
  const oldEl = document.getElementById('p-old');
  const badge = document.getElementById('p-badge');
  const specs = document.getElementById('p-specs');
  const aOlx = document.getElementById('p-olx');
  const aDl = document.getElementById('p-download');

  const imgs = Array.isArray(p.img) && p.img.length ? p.img : ['public/images/image.webp'];
  if (hero) {
    hero.src = imgs[0];
    hero.alt = pick(p.title);
  }
  if (thumbs) {
    thumbs.innerHTML = imgs
      .map((src, i) => `<img src="${src}" alt="" data-idx="${i}">`)
      .join('');
    thumbs.querySelectorAll('img').forEach((im) =>
      im.addEventListener('click', (e) => {
        const idx = Number(e.currentTarget.getAttribute('data-idx')) || 0;
        if (hero) hero.src = imgs[idx];
      })
    );
  }

  if (title) title.textContent = pick(p.title);
  if (desc) desc.textContent = pick(p.descLong) || pick(p.descShort);
  if (price) price.textContent = p.price ? formatPrice(p.price) : '';
  const old = calcOldPrice(p.price, p.discount);
  if (oldEl) {
    if (old) {
      oldEl.textContent = formatPrice(old);
      oldEl.hidden = false;
    } else {
      oldEl.hidden = true;
    }
  }
  if (badge) {
    badge.textContent = 'HOT';
    badge.hidden = !p.hot;
  }

  if (specs) {
    const items = pickArr(p.specs);
    specs.innerHTML = items.map((s) => `<li>${s}</li>`).join('');
  }

  if (aOlx) {
    aOlx.href = p.olx || '#';
    aOlx.setAttribute('data-olx', '');
  }
  if (aDl) {
    aDl.href = pickDownload(p.download);
  }
  if (window.__i18n) window.__i18n.apply(window.__i18n.lang());
}

function markActive(){
  const file = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const hash = location.hash || '';
  const isProductView = hash.startsWith('#/product/'); // <<< ключ

  document.querySelectorAll('.nav a, .nav-col a').forEach(a => {
    const href = (a.getAttribute('href') || '').trim();
    const hrefFile = href.endsWith('.html') ? href.split('/').pop().toLowerCase() : '';
    const isHash  = href.startsWith('#') && href === hash;
    const isFile  = hrefFile && hrefFile === file;
    const isHome  = !hash && (file === '' || file === 'index.html') && href === 'index.html';

    let active = isHash || isFile || isHome;

    if (isProductView) {
      active = (hrefFile === 'products.html');
    }

    a.classList.toggle('active', active);
  });
}


function bindLeaveModal() {
  const modal = document.getElementById('leave-modal');
  if (!modal) return;
  const btnNo = document.getElementById('leave-no');
  const btnYes = document.getElementById('leave-yes');
  const urlSpan = document.getElementById('leave-url');
  const isExternal = (href) => {
    try { const u = new URL(href, location.href); return u.origin !== location.origin; }
    catch { return false; }
  };
  function open(url) {
    urlSpan && (urlSpan.textContent = url);
    if (btnYes) btnYes.href = url;
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
  }
  function close() {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
  }

  btnNo?.addEventListener('click', close);
  modal.querySelector('.modal-backdrop')?.addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  document.body.addEventListener('click', (e) => {
    const a = e.target.closest('a[data-olx]');
    if (!a) return;
    const href = a.getAttribute('href') || '#';
    if (href.startsWith('#')) return;
    e.preventDefault();
    open(href);
  });
  document.body.addEventListener('click', (e) => {
    const a = e.target.closest('#p-download, a[download]');
    if (!a) return;

    const href = a.getAttribute('href') || '#';
    if (!href || href === '#' || href.startsWith('javascript:')) return;

    if (isExternal(href)) {
      e.preventDefault();
      open(href);
    }
  });

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href]');
    if (!a) return;

    const href = (a.getAttribute('href') || '').trim();
    if (!href || href === '#' || href.startsWith('javascript:') || href.startsWith('mailto:') || href.startsWith('tel:')) return;

    const inFooter = !!a.closest('.site-footer');
    let isExternal = false;
    try { isExternal = new URL(href, location.href).origin !== location.origin; } catch {}

    if (a.matches('a[data-olx]') || (inFooter && isExternal)) {
      e.preventDefault();
      open(href);
    }
  });
}

// function markActive(){
//   const file = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
//   const hash = location.hash;
//   document.querySelectorAll('.nav a, .nav-col a').forEach(a => {
//     const href = (a.getAttribute('href') || '').trim();
//     const hrefFile = href.endsWith('.html') ? href.split('/').pop().toLowerCase() : '';
//     const isHash  = href.startsWith('#') && href === hash;
//     const isFile  = hrefFile && hrefFile === file;
//     const isHome  = !hash && (file === '' || file === 'index.html') && href === 'index.html';
//     a.classList.toggle('active', isHash || isFile || isHome);
//   });
// }

async function init() {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  await mountHeader();
  document.documentElement.lang = window.__i18n.lang();
  applyI18n(window.__i18n.lang());
  window.addEventListener('langchange', () => {
    route();
  });

  await loadProducts();

  window.addEventListener('hashchange', route);
  route();

  bindLeaveModal();
  markActive()
  // setTimeout(() => {
      hideLoader();
  // }, 250);

}

document.documentElement.lang = currentLang();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
