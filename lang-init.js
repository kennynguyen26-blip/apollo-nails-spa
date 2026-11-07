/* Runs before the page paints: marks JS as available, applies the saved
   language (or a Spanish browser) and the Cash/Card price choice, so nothing flashes. */
(function () {
  var d = document.documentElement, l = null;
  d.classList.add('js');
  try { l = localStorage.getItem('apollo_lang'); } catch (e) {}
  if (l !== 'en' && l !== 'es') l = /^es\b/i.test(navigator.language || '') ? 'es' : 'en';
  d.lang = l;
  try { if (sessionStorage.getItem('apollo_pay') === 'card') d.classList.add('pay-card'); } catch (e) {}
})();
