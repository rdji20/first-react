"use strict";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import UnderdogSvg from "./Cd";

// function to initialize window
(function () {
  // any module-globals (limit the use of these when possible)
  window.addEventListener("load", init);
  function init() {
    ReactDOM.render(<App />, document.querySelector("#root"));
    window.addEventListener("scroll", stickBar);
  }

  function stickBar() {
    let menu = qs(".menu");
    menu.classList.toggle("sticky", window.scrollY > 0);
  }

  function checkWork() {
    console.log("I am working");
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
//eactDOM.render(<UnderdogSvg />, document.querySelector("#logo"));
