/* ==========================================================================
   Apollo Nails & Spa — site behaviour
   All visible text lives in the HTML (English + Spanish side by side).
   This file only switches language, opens tabs/lightbox, and similar.
   ========================================================================== */
(function () {
  'use strict';

  /* ---------- Business settings (one place to edit) ---------- */
  var CONFIG = {
    TIMEZONE: 'America/Chicago',
    // 0 = Sunday … 6 = Saturday. Times are 24h "HH:MM".
    HOURS: {
      0: ['11:00', '17:30'],
      1: ['09:30', '19:00'], 2: ['09:30', '19:00'], 3: ['09:30', '19:00'], 4: ['09:30', '19:00'], 5: ['09:30', '19:00'],
      6: ['09:00', '19:00']
    },
    // Holiday closures / special hours go here, e.g. '2026-12-25': null (closed) or '2026-12-24': ['09:30','15:00']
    SPECIAL: {}
  };

  var doc = document.documentElement;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  var lang = function () { return doc.lang === 'es' ? 'es' : 'en'; };
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Language ---------- */
  var ATTRS = ['alt', 'aria-label', 'title', 'content'];
  var enTitle = document.title;

  function applyAttributes() {
    var es = lang() === 'es';
    ATTRS.forEach(function (attr) {
      $$('[data-es-' + attr + ']').forEach(function (el) {
        var enKey = 'data-en-' + attr;
        if (!el.hasAttribute(enKey)) el.setAttribute(enKey, el.getAttribute(attr) || '');
        el.setAttribute(attr, es ? el.getAttribute('data-es-' + attr) : el.getAttribute(enKey));
      });
    });
    document.title = es && doc.getAttribute('data-es-title') ? doc.getAttribute('data-es-title') : enTitle;
    var ogl = $('meta[property="og:locale"]');
    if (ogl) ogl.setAttribute('content', es ? 'es_US' : 'en_US');
    $$('[data-set-lang]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-set-lang') === lang())); });
  }

  function setLang(l) {
    doc.lang = l;
    store.set('apollo_lang', l);
    applyAttributes();
    updateOpenStatus();
    refreshReadMore();
    if (lightbox.isOpen()) lightbox.render();
  }

  $$('[data-set-lang]').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-set-lang')); });
  });

  /* ---------- Cash | Card prices ----------
     Every price holds both amounts; <html class="pay-card"> shows the card one.
     The choice lasts for this browsing session (set before paint in lang-init.js). */
  function setPay(mode, save) {
    var card = mode === 'card';
    doc.classList.toggle('pay-card', card);
    $$('[data-set-pay]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-set-pay') === (card ? 'card' : 'cash'))); });
    if (save) { try { sessionStorage.setItem('apollo_pay', card ? 'card' : 'cash'); } catch (e) {} }
  }
  $$('[data-set-pay]').forEach(function (b) {
    b.addEventListener('click', function () { setPay(b.getAttribute('data-set-pay'), true); });
  });
  setPay(doc.classList.contains('pay-card') ? 'card' : 'cash', false);

  /* ---------- Service rows: the whole row opens/closes; keep aria-expanded in sync ---------- */
  $$('details.svc').forEach(function (d) {
    var sum = d.querySelector('summary');
    var sync = function () { sum.setAttribute('aria-expanded', String(d.open)); };
    sync();
    d.addEventListener('toggle', sync);
  });

  /* ---------- Image slots: show the photo once the file exists ---------- */
  $$('.media img').forEach(function (img) {
    var box = img.closest('.media');
    var done = function () { if (img.naturalWidth > 0) box.classList.add('is-loaded'); };
    if (img.complete) done();
    img.addEventListener('load', done);
  });

  /* ---------- Header: shadow on scroll + phone menu ---------- */
  var header = $('.site-header');
  var onScroll = function () { if (header) header.classList.toggle('is-scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var toggle = $('.menu-toggle'), nav = $('#mainNav');
  function closeNav(focusToggle) {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    document.body.classList.remove('nav-open');
    var lbl = lang() === 'es' ? 'Abrir menú' : 'Open menu';
    toggle.setAttribute('aria-label', lbl);
    if (focusToggle) toggle.focus();
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
      document.body.classList.toggle('nav-open', open);
      toggle.setAttribute('aria-label', open ? (lang() === 'es' ? 'Cerrar menú' : 'Close menu') : (lang() === 'es' ? 'Abrir menú' : 'Open menu'));
      if (open) { var first = $('a', nav); if (first) first.focus(); }
    });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) closeNav(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('is-open')) closeNav(true); });
    window.matchMedia('(min-width: 1024px)').addEventListener('change', function () { closeNav(false); });
  }

  /* ---------- Open now / closed (Texas time, not the visitor's clock) ---------- */
  function texasNow() {
    var parts = new Intl.DateTimeFormat('en-US', { timeZone: CONFIG.TIMEZONE, weekday: 'short', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' })
      .formatToParts(new Date()).reduce(function (o, p) { o[p.type] = p.value; return o; }, {});
    var days = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    return { day: days[parts.weekday], date: parts.year + '-' + parts.month + '-' + parts.day, mins: (+parts.hour % 24) * 60 + (+parts.minute) };
  }
  var toMins = function (t) { var a = t.split(':'); return +a[0] * 60 + +a[1]; };
  function fmt(t) {
    var m = toMins(t), h = Math.floor(m / 60), mm = m % 60, h12 = h % 12 || 12, pm = h >= 12;
    var time = h12 + (mm ? ':' + String(mm).padStart(2, '0') : '');
    return lang() === 'es' ? time + (pm ? ' p. m.' : ' a. m.') : time + (pm ? ' PM' : ' AM');
  }
  function hoursFor(dateStr, day) {
    if (Object.prototype.hasOwnProperty.call(CONFIG.SPECIAL, dateStr)) return CONFIG.SPECIAL[dateStr];
    return CONFIG.HOURS[day] || null;
  }
  function updateOpenStatus() {
    var now = texasNow(), today = hoursFor(now.date, now.day), es = lang() === 'es', text, open = false;
    if (today && now.mins >= toMins(today[0]) && now.mins < toMins(today[1])) {
      open = true;
      text = es ? 'Abierto ahora · cierra a las ' + fmt(today[1]) : 'Open now · closes ' + fmt(today[1]);
    } else if (today && now.mins < toMins(today[0])) {
      text = es ? 'Cerrado · abre hoy a las ' + fmt(today[0]) : 'Closed · opens today at ' + fmt(today[0]);
    } else {
      var nd = (now.day + 1) % 7, tm = CONFIG.HOURS[nd];
      text = es ? 'Cerrado · abre mañana a las ' + fmt(tm[0]) : 'Closed · opens tomorrow at ' + fmt(tm[0]);
    }
    $$('[data-open-status]').forEach(function (el) { el.textContent = text; el.classList.toggle('is-open', open); });
    $$('.hours tr[data-days]').forEach(function (tr) {
      tr.classList.toggle('is-today', tr.getAttribute('data-days').split(',').indexOf(String(now.day)) > -1);
    });
  }
  updateOpenStatus();
  setInterval(updateOpenStatus, 60000);

  /* ---------- Service tabs ---------- */
  var tabs = $$('[role="tab"]');
  function selectTab(name, focus) {
    tabs.forEach(function (t) {
      var on = t.getAttribute('data-tab') === name;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      var panel = document.getElementById(t.getAttribute('aria-controls'));
      if (panel) panel.classList.toggle('is-active', on);
      if (on && focus) t.focus();
      if (on) {
        // keep the chosen tab visible inside the sideways-scrolling strip (phones) without moving the page
        var strip = t.parentNode, l = t.offsetLeft - strip.offsetLeft, r = l + t.offsetWidth;
        var x = l < strip.scrollLeft + 16 ? l - 16 : (r > strip.scrollLeft + strip.clientWidth - 16 ? r - strip.clientWidth + 16 : null);
        if (x !== null) strip.scrollTo({ left: Math.max(0, x), behavior: reduceMotion ? 'auto' : 'smooth' });
      }
    });
  }
  if (tabs.length) {
    selectTab('manicure', false);
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { selectTab(t.getAttribute('data-tab'), false); });
      t.addEventListener('keydown', function (e) {
        var k = e.key, n = null;
        if (k === 'ArrowRight' || k === 'ArrowDown') n = (i + 1) % tabs.length;
        else if (k === 'ArrowLeft' || k === 'ArrowUp') n = (i - 1 + tabs.length) % tabs.length;
        else if (k === 'Home') n = 0;
        else if (k === 'End') n = tabs.length - 1;
        if (n !== null) { e.preventDefault(); selectTab(tabs[n].getAttribute('data-tab'), true); }
      });
    });
  }

  // Links like "Drinks" or a pedicure card open the right tab (and service)
  function openFromLink(tab, hash) {
    if (tab) selectTab(tab, false);
    var target = hash && hash.length > 1 ? document.getElementById(hash.slice(1)) : null;
    if (target && target.tagName === 'DETAILS') {
      target.open = true;
      setTimeout(function () { target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' }); var s = $('summary', target); if (s) s.focus({ preventScroll: true }); }, 30);
      return true;
    }
    return false;
  }
  $$('[data-open-tab]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var handled = openFromLink(a.getAttribute('data-open-tab'), a.getAttribute('href'));
      if (handled) { e.preventDefault(); history.replaceState(null, '', a.getAttribute('href')); }
    });
  });
  if (location.hash && /^#ped-\d$/.test(location.hash)) openFromLink('pedicure', location.hash);

  /* ---------- Drink filters ---------- */
  var drinkBtns = $$('[data-filter]');
  drinkBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      var f = b.getAttribute('data-filter');
      drinkBtns.forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      $$('#drinksGrid > li').forEach(function (li) { li.hidden = !(f === 'all' || li.getAttribute('data-cat') === f); });
    });
  });

  /* ---------- Reviews: arrows, read more (no autoplay) ---------- */
  var track = $('#reviewTrack');
  function cardStep() { var c = track && $('.review-card', track); return c ? c.getBoundingClientRect().width + 16 : 300; }
  function updateArrows() {
    if (!track) return;
    var prev = $('[data-carousel="prev"]'), next = $('[data-carousel="next"]');
    if (prev) prev.disabled = track.scrollLeft < 4;
    if (next) next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
  }
  if (track) {
    $$('[data-carousel]').forEach(function (b) {
      b.addEventListener('click', function () {
        track.scrollBy({ left: (b.getAttribute('data-carousel') === 'next' ? 1 : -1) * cardStep(), behavior: reduceMotion ? 'auto' : 'smooth' });
      });
    });
    track.addEventListener('scroll', updateArrows, { passive: true });
    track.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); track.scrollBy({ left: (e.key === 'ArrowRight' ? 1 : -1) * cardStep(), behavior: reduceMotion ? 'auto' : 'smooth' }); }
    });
    window.addEventListener('resize', function () { updateArrows(); refreshReadMore(); });
    updateArrows();
  }
  function refreshReadMore() {
    $$('.review-card').forEach(function (card) {
      var p = $('blockquote p', card), btn = $('.read-more', card);
      if (!p || !btn) return;
      if (card.classList.contains('is-expanded')) { btn.hidden = false; return; }
      btn.hidden = p.scrollHeight <= p.clientHeight + 2;
    });
  }
  $$('.read-more').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var card = btn.closest('.review-card'), open = !card.classList.contains('is-expanded');
      card.classList.toggle('is-expanded', open);
      btn.setAttribute('aria-expanded', String(open));
      $$('span', btn)[0].textContent = open ? 'Show less' : 'Read more';
      $$('span', btn)[1].textContent = open ? 'Ver menos' : 'Leer más';
    });
  });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refreshReadMore); else refreshReadMore();

  /* ---------- Lightbox (gallery + drinks) ---------- */
  var lightbox = (function () {
    var box = $('#lightbox'), img = box && $('.lb-img', box), cap = box && $('.lb-cap', box);
    var items = [], index = 0, opener = null, placeholder = null;
    function isOpen() { return box && !box.hidden; }
    function render() {
      var btn = items[index], src = $('img', btn), pic = btn.closest('.media') || btn;
      var loaded = pic.classList.contains('is-loaded');
      if (placeholder) { placeholder.remove(); placeholder = null; }
      if (loaded) { img.src = src.currentSrc || src.src; img.alt = src.alt; }
      else {
        img.removeAttribute('src'); img.alt = '';
        placeholder = document.createElement('div');
        placeholder.className = 'media lb-placeholder';
        placeholder.setAttribute('data-file', btn.getAttribute('data-file') || '');
        img.parentNode.insertBefore(placeholder, img);
      }
      var name = btn.querySelector('.g-cap') || (btn.parentNode && btn.parentNode.querySelector('.drink-name'));
      var txt = '';
      if (name) { var part = name.querySelector(lang() === 'es' ? '.es' : '.en'); txt = (part || name).textContent.trim(); }
      cap.textContent = txt + '  ·  ' + (index + 1) + ' / ' + items.length;
    }
    function open(btn) {
      var group = btn.getAttribute('data-lightbox');
      items = $$('[data-lightbox="' + group + '"]').filter(function (b) { return !b.closest('li[hidden]'); });
      index = Math.max(0, items.indexOf(btn));
      opener = btn;
      box.hidden = false;
      document.body.classList.add('lb-open');
      render();
      $('.lb-close', box).focus();
    }
    function close() {
      box.hidden = true;
      document.body.classList.remove('lb-open');
      if (opener) opener.focus();
    }
    function go(d) { index = (index + d + items.length) % items.length; render(); }
    if (box) {
      $$('[data-lightbox]').forEach(function (b) { b.addEventListener('click', function () { open(b); }); });
      $('.lb-close', box).addEventListener('click', close);
      $('.lb-prev', box).addEventListener('click', function () { go(-1); });
      $('.lb-next', box).addEventListener('click', function () { go(1); });
      box.addEventListener('click', function (e) { if (e.target === box) close(); });
      document.addEventListener('keydown', function (e) {
        if (!isOpen()) return;
        if (e.key === 'Escape') close();
        else if (e.key === 'ArrowRight') go(1);
        else if (e.key === 'ArrowLeft') go(-1);
        else if (e.key === 'Tab') { // keep focus inside
          var f = $$('button', box), first = f[0], last = f[f.length - 1];
          if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
          else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
      });
      var sx = null;
      box.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
      box.addEventListener('touchend', function (e) { if (sx === null) return; var dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1); sx = null; });
    }
    return { isOpen: isOpen, render: render };
  })();

  /* ---------- Cookie consent + Google Map ---------- */
  var CC_KEY = 'apollo_cookie_consent';
  var banner = $('#cookieBanner');
  function applyConsent() {
    var v = store.get(CC_KEY);
    $$('iframe[data-consent-src]').forEach(function (f) { if (v === 'accepted' && !f.getAttribute('src')) f.src = f.getAttribute('data-consent-src'); });
    $$('[data-map-consent]').forEach(function (el) { el.hidden = v === 'accepted'; });
    if (banner) banner.hidden = v === 'accepted' || v === 'declined';
  }
  document.addEventListener('click', function (e) {
    if (e.target.closest('[data-cc-accept]')) { store.set(CC_KEY, 'accepted'); applyConsent(); }
    else if (e.target.closest('[data-cc-decline]')) { store.set(CC_KEY, 'declined'); applyConsent(); }
    else if (e.target.closest('[data-cc-open]')) { if (banner) { banner.hidden = false; var b = $('[data-cc-accept]', banner); if (b) b.focus(); } }
  });
  applyConsent();

  /* ---------- Reveal on scroll ---------- */
  var reveals = $$('.reveal');
  if (!reduceMotion && 'IntersectionObserver' in window) {
    // small stagger inside each list/grid
    reveals.forEach(function (el) {
      var sibs = el.parentNode ? Array.prototype.filter.call(el.parentNode.children, function (c) { return c.classList.contains('reveal'); }) : [];
      el.style.setProperty('--i', Math.min(sibs.indexOf(el), 6));
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------- Current section in nav ---------- */
  var navLinks = $$('.main-nav a[href^="#"]:not([data-open-tab])');
  if ('IntersectionObserver' in window && navLinks.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        navLinks.forEach(function (a) { a.classList.toggle('is-current', a.getAttribute('href') === '#' + en.target.id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    navLinks.forEach(function (a) { var s = document.getElementById(a.getAttribute('href').slice(1)); if (s) spy.observe(s); });
  }

  applyAttributes();
})();
