"use strict";

(function () {
  // any module-globals (limit the use of these when possible)
  window.addEventListener("load", init);
  function init() {}
  // other functions

  function id(idName) {
    return document.getElementById(idName);
  }
  function qs(selector) {
    return document.querySelector(selector);
  }
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }
  function gen(elType) {
    return document.createElement(elType);
  }
})();
