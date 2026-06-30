/* ============================================================
   lang.js — Pompstation language helper
   Reads ?lang= from URL (takes priority), falls back to localStorage.
   Sets: window._L   (active lang: 'nl' | 'en')
         window._t   (translate fn: _t(nl, en) → string)
         window._setL (setter: _setL('en') → reload with ?lang=en)
   Auto-patches internal links when English is active.
   ============================================================ */
(function () {
  "use strict";

  var params = new URLSearchParams(location.search);
  var urlLang = params.get("lang");
  var stored = localStorage.getItem("ps_lang") || "nl";
  var lang = (urlLang === "en" || urlLang === "nl") ? urlLang : stored;

  // Sync URL param to localStorage
  if (urlLang && urlLang !== stored) {
    localStorage.setItem("ps_lang", lang);
  }

  window._L = lang;

  window._t = function (nl, en) {
    return lang === "en" ? (en || nl) : nl;
  };

  window._setL = function (newLang) {
    localStorage.setItem("ps_lang", newLang);
    var url = new URL(location.href);
    if (newLang === "nl") {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", newLang);
    }
    location.href = url.toString();
  };

  // Set html[lang] attribute
  document.documentElement.lang = lang;

  // Auto-patch internal links when English is active
  if (lang === "en") {
    function patchLinks() {
      document.querySelectorAll("a[href]").forEach(function (a) {
        var href = a.getAttribute("href");
        if (!href) return;
        if (href.charAt(0) === "#") return;
        if (href.indexOf("mailto:") === 0 || href.indexOf("tel:") === 0) return;
        if (href.indexOf("pompstation.nu") !== -1) return; // external reservation
        if (href.indexOf("lang=") !== -1) return; // already patched
        try {
          var url = new URL(href, location.origin);
          if (url.origin !== location.origin) return;
          url.searchParams.set("lang", "en");
          a.setAttribute("href", url.pathname + url.search + (url.hash || ""));
        } catch (e) { /* ignore */ }
      });
    }

    function setupObserver() {
      patchLinks();
      var observer = new MutationObserver(patchLinks);
      observer.observe(document.body, { childList: true, subtree: true });
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", setupObserver);
    } else if (document.body) {
      setupObserver();
    } else {
      document.addEventListener("DOMContentLoaded", setupObserver);
    }
  }
})();
