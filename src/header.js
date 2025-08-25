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
      "title.links":"Admin Inc. — Посилання",
      "links.heading":"Посилання",
      "links.content":"Контент",
      "links.gaming":"Геймінг",
      "links.resume": "Резюме",
      back:"Назад",
      "modal.leave.title":"Покинути сайт?","modal.leave.text":"Ви переходите за зовнішнім посиланням:","modal.leave.no":"Ні","modal.leave.yes":"Так",
      "footer.tagline":"3D-друк з увагою до деталей","footer.links":"Посилання",
      "products.title":"Усі продукти",
      "title.home":"Admin Inc. — 3D друк PETG","title.products":"Admin Inc. — Продукти","title.product":"Admin Inc. — Продукт"
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
      "title.links":"Admin Inc. — Links",
      "links.heading":"Links",
      "links.content":"Content",
      "links.gaming":"Gaming",
      "links.resume": "Summary",
      back:"Back",
      "modal.leave.title":"Leave the site?","modal.leave.text":"You are going to an external link:","modal.leave.no":"No","modal.leave.yes":"Yes",
      "footer.tagline":"3D printing with attention to detail","footer.links":"Links",
      "products.title":"All products",
      "title.home":"Admin Inc. — 3D printing with PETG","title.products":"Admin Inc. — Products","title.product":"Admin Inc. — Product"
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
      "title.links":"Admin Inc. — Links",
      "links.heading":"Links",
      "links.content":"Content",
      "links.gaming":"Gaming",
      "links.resume": "Lebenslauf",
      back:"Zurück",
      "modal.leave.title":"Seite verlassen?","modal.leave.text":"Sie öffnen einen externen Link:","modal.leave.no":"Nein","modal.leave.yes":"Ja",
      "footer.tagline":"3D-Druck mit Liebe zum Detail","footer.links":"Links",
      "products.title":"Alle Produkte",
      "title.home":"Admin Inc. — 3D-Druck PETG","title.products":"Admin Inc. — Produkte","title.product":"Admin Inc. — Produkt"
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
      "title.links":"Admin Inc. — Linki",
      "links.heading":"Linki",
      "links.content":"Content",
      "links.gaming":"Gaming",
      "links.resume": "CV",
      back:"Wstecz",
      "modal.leave.title":"Opuścić stronę?","modal.leave.text":"Przechodzisz do zewnętrznego linku:","modal.leave.no":"Nie","modal.leave.yes":"Tak",
      "footer.tagline":"Druk 3D z dbałością o detale","footer.links":"Linki",
      "products.title":"Wszystkie produkty",
      "title.home":"Admin Inc. — Druk 3D PETG","title.products":"Admin Inc. — Produkty","title.product":"Admin Inc. — Produkt"
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
      "title.links":"Admin Inc. — Odkazy",
      "links.heading":"Odkazy",
      "links.content":"Obsah",
      "links.gaming":"Gaming",
      "links.resume": "Životopis",
      back:"Zpět",
      "modal.leave.title":"Opustit web?","modal.leave.text":"Přecházíte na externí odkaz:","modal.leave.no":"Ne","modal.leave.yes":"Ano",
      "footer.tagline":"3D tisk s důrazem na detail","footer.links":"Odkazy",
      "products.title":"Všechny produkty",
      "title.home":"Admin Inc. — 3D tisk PETG","title.products":"Admin Inc. — Produkty","title.product":"Admin Inc. — Produkt"
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
      "title.links":"Admin Inc. — Links",
      "links.heading":"Links",
      "links.content":"Indhold",
      "links.gaming":"Gaming",
      "links.resume": "CV",
      back:"Tilbage",
      "modal.leave.title":"Forlade siden?","modal.leave.text":"Du går til et eksternt link:","modal.leave.no":"Nej","modal.leave.yes":"Ja",
      "footer.tagline":"3D-print med fokus på detaljen","footer.links":"Links",
      "products.title":"Alle produkter",
      "title.home":"Admin Inc. — 3D-print PETG","title.products":"Admin Inc. — Produkter","title.product":"Admin Inc. — Produkt"
    }
  };
  bindLeaveModal();

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
  I.t = function (key, lang) {
    const langs = [lang, 'uk', 'en'];
    const getNested = (o, p) => p.split('.').reduce((x, k) => (x && x[k] != null ? x[k] : undefined), o);

    for (const code of langs) {
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
    const onLinksPage   = !!document.getElementById('links-page');
    const viewProduct   = document.getElementById('view-product');
    let titleKey = 'title.home';
    if (onProductsPage) titleKey = 'title.products';
    else if (onLinksPage) titleKey = 'title.links';
    else if (viewProduct && !viewProduct.hidden) titleKey = 'title.product';
    const title = this.t(titleKey, lang);
    if (title) document.title = title;
  };
})();



// Mounts /header.html into #header-root and wires compact menu + lang sync.
(function(){
  const STATE = { lang: localStorage.getItem('lang') || document.documentElement.lang || 'uk' };

  function setLang(newLang){
    STATE.lang = newLang;
    localStorage.setItem('lang', newLang);
    // sync both selects if present
    const a = document.getElementById('lang');
    const b = document.getElementById('lang-panel');
    if (a) a.value = newLang;
    if (b) b.value = newLang;
    // toast (optional)
    const toast = document.getElementById('lang-toast');
    const toastText = document.getElementById('lang-toast-text');
    if (toast && toastText){
      toastText.textContent = (newLang || '').toUpperCase();
      toast.hidden = false;
      setTimeout(()=>toast.hidden = true, 1200);
    }
    // emit event for the app
    window.dispatchEvent(new CustomEvent('langchange', { detail: { lang: newLang } }));

  }

  // toggles the slide-down panel
  function togglePanel(show){
    const wrap = document.querySelector('.site-header-wrap');
    const btn = document.getElementById('menu-btn');
    const panel = document.getElementById('nav-panel');
    const want = (typeof show === 'boolean') ? show : panel?.hasAttribute('hidden');
    if (!panel || !btn || !wrap) return;
    if (want){
      panel.removeAttribute('hidden');
      btn.setAttribute('aria-expanded', 'true');
      document.addEventListener('keydown', onEsc);
    }else{
      panel.setAttribute('hidden', '');
      btn.setAttribute('aria-expanded', 'false');
      document.removeEventListener('keydown', onEsc);
    }
  }
  function onEsc(e){ if (e.key === 'Escape') togglePanel(false); }

  // determines "compact" mode via matchMedia
  function applyCompact(){
    const wrap = document.querySelector('.site-header-wrap');
    if (!wrap) return;
    const compact = window.matchMedia('(max-width: 720px)').matches;
    wrap.classList.toggle('is-compact', compact);
  }

  async function mountHeader(){
    // Load header.html and insert template + mount point into DOM
    const res = await fetch('/header.html');
    const html = await res.text();
    // inject template into body only once
    if (!document.getElementById('tpl-header')){
      const tmpDiv = document.createElement('div');
      tmpDiv.innerHTML = html;
      // Move template to <body>, keep #header-root placeholder in the document
      const tpl = tmpDiv.querySelector('#tpl-header');
      if (tpl) document.body.appendChild(tpl);
      const headerRootExisting = document.getElementById('header-root');
      if (headerRootExisting){
        // clear then mount
        headerRootExisting.innerHTML = '';
        const frag = document.getElementById('tpl-header').content.cloneNode(true);
        headerRootExisting.appendChild(frag);
      }
    }

    // Wire events
    applyCompact();
    window.addEventListener('resize', applyCompact);

    const menuBtn = document.getElementById('menu-btn');
    if (menuBtn) menuBtn.addEventListener('click', () => togglePanel());

    // Close panel when any nav link is clicked
    document.querySelectorAll('#nav-panel a').forEach(a => {
      a.addEventListener('click', () => togglePanel(false));
    });

    // sync lang selects both ways
    const langTop = document.getElementById('lang');
    const langPane = document.getElementById('lang-panel');
    if (langTop) langTop.value = STATE.lang;
    if (langPane) langPane.value = STATE.lang;

    langTop?.addEventListener('change', (e)=> setLang(e.target.value));
    langPane?.addEventListener('change', (e)=> setLang(e.target.value));

    // highlight active link based on hash
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
    markActive();
    window.addEventListener('hashchange', markActive);
    if (window.__i18n) window.__i18n.apply(window.__i18n.lang());
    if (window.__i18n) window.__i18n.apply(newLang);

  }

  // init
  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', mountHeader);
  }else{
    mountHeader();
    if (window.__i18n) window.__i18n.apply(window.__i18n.lang());
  }

})();
