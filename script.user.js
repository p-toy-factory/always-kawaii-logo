// ==UserScript==
// @name         Always kawaii logo
// @namespace    http://github.com/p-toy-factory/always-kawaii-logo
// @version      1.1.0
// @description  Make logo of the websites kawaii if available
// @author       Pink Champagne
// @supportURL   https://github.com/p-toy-factory/always-kawaii-logo/issues
// @match        https://asahilinux.org/*
// @match        https://bsky.app/*
// @match        https://www.haskell.org/
// @match        https://hono.dev/
// @match        https://misskey-hub.net/*
// @match        https://nextjs.org/*
// @match        https://qwik.dev/*
// @match        https://react.dev/*
// @match        https://vuejs.org/
// @grant        none
// @run-at       document-start
// @downloadURL  https://raw.githubusercontent.com/p-toy-factory/always-kawaii-logo/main/script.user.js
// @updateURL    https://raw.githubusercontent.com/p-toy-factory/always-kawaii-logo/main/script.user.js
// ==/UserScript==
// @ts-check
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
        location.search.includes(kawaiiSearch) ||
        localStorage.getItem("kawaii") === String(true)
      ) {
        return;
      }
      location.search = kawaiiSearch;
      break;
    }

    case "bsky.app": {
      if (
        location.search.includes(kawaiiSearch) ||
        JSON.parse(localStorage.getItem("BSKY_STORAGE") ?? "null")?.kawaii ===
          true
      ) {
        return;
      }
      location.search = kawaiiSearch;
      break;
    }

    case "www.haskell.org":
    case "vuejs.org":
      enableUwUOnlyHomepage();
      break;

    case "misskey-hub.net":
      if (/^\/[\w-]+\/$/.test(location.pathname)) {
        if (
          location.search.includes(uwuSearch) ||
          localStorage.getItem("miHub_uwu") === String(true)
        ) {
          return;
        }
        location.search = uwuSearch;
      }
      break;

    case "nextjs.org":
      requestIdleCallback(() => {
        if (
          location.search.includes(uwuSearch) ||
          document.documentElement.classList.contains("uwu")
        ) {
          return;
        }
        location.search = uwuSearch;
      });
      break;

    case "hono.dev":
      enableKawaiiOnlyHomepage();
      break;

    case "qwik.dev":
      {
        if (
          location.search.includes(uwuSearch) ||
          localStorage.getItem("uwu") === String(true)
        ) {
          return;
        }
        location.search = uwuSearch;
      }
      break;

    case "react.dev":
      {
        if (
          location.search.includes(uwuSearch) ||
          localStorage.getItem("uwu") === String(true)
        ) {
          return;
        }
        location.search = uwuSearch;
      }
      break;
  }
})();
