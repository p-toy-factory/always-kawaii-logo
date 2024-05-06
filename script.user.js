// ==UserScript==
// @name         Always kawaii logo
// @namespace    http://github.com/p-toy-factory/always-kawaii-logo
// @version      1.0.0
// @description  Make logo of the websites kawaii if available
// @author       Pink Champagne
// @downloadURL  https://raw.githubusercontent.com/p-toy-factory/always-kawaii-logo/main/script.user.js
// @updateURL    https://raw.githubusercontent.com/p-toy-factory/always-kawaii-logo/main/script.user.js
// @supportURL   https://github.com/p-toy-factory/always-kawaii-logo/issues
// @match        https://asahilinux.org/*
// @match        https://bsky.app/*
// @match        https://www.haskell.org/
// @match        https://hono.dev/
// @match        https://nextjs.org/
// @match        https://react.dev/*
// @match        https://vuejs.org/
// @grant        none
// @run-at       document-start
// ==/UserScript==
(function () {
  "use strict";

  const uwuSearch = "uwu=true";

  function enableUwUOnlyHomepage() {
    if (location.pathname === "/" && !location.search.includes(uwuSearch)) {
      location.search = uwuSearch;
    }
  }

  const kawaiiSearch = "kawaii=true";

  function enableKawaiiOnlyHomepage() {
    if (location.pathname === "/" && !location.search.includes(kawaiiSearch)) {
      location.search = kawaiiSearch;
    }
  }

  switch (location.hostname) {
    case "asahilinux.org": {
      if (
        localStorage.getItem("kawaii") === String(true) ||
        location.search.includes(kawaiiSearch)
      ) {
        return;
      }
      location.search = kawaiiSearch;
      break;
    }

    case "bsky.app": {
      if (
        JSON.parse(localStorage.getItem("BSKY_STORAGE"))?.kawaii === true ||
        location.search.includes(kawaiiSearch)
      ) {
        return;
      }
      location.search = kawaiiSearch;
      break;
    }

    case "www.haskell.org":
    case "nextjs.org": // TODO: Enable uwu on any page
    case "vuejs.org":
      enableUwUOnlyHomepage();
      break;

    case "hono.dev":
      enableKawaiiOnlyHomepage();
      break;

    case "react.dev": {
      if (
        localStorage.getItem("uwu") === String(true) ||
        location.search.includes(uwuSearch)
      ) {
        return;
      }
      location.search = uwuSearch;
      break;
    }

    default:
  }
})();
