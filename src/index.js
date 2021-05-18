"use strict";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

(function () {
  window.addEventListener("load", init);
  function init() {
    ReactDOM.render(<App />, document.querySelector("#root"));
    window.addEventListener("scroll", stickBar);
  }

  /**
   * Creates sticky menu bar
   */
  function stickBar() {
    let menu = qs(".menu");
    menu.classList.toggle("sticky", window.scrollY > 0);
  }

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
