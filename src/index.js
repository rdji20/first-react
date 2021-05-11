"use strict";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UnderdogSvg from "./Cd";

// function to initialize window
(function () {
  // any module-globals (limit the use of these when possible)

  window.addEventListener("load", init);
  function init() {
    ReactDOM.render(<App />, document.querySelector("#root"));
    ReactDOM.render(
      <UnderdogSvg />,
      document.querySelector("#nba-interactive")
    );
    window.addEventListener("scroll", stickBar);
    id("jharden").addEventListener("click", displayHarden);
    id("made-shots-btn").addEventListener("click", displayMade);
  }

  function stickBar() {
    let menu = qs(".menu");
    menu.classList.toggle("sticky", window.scrollY > 0);
  }

  function displayHarden() {
    let container = document.getElementById("message-cont");
    container.innerHTML = "";
    this.classList.toggle("clicked-img");
    let beardShots = qsa(".beard-shots");
    for (let i = 0; i < beardShots.length; i++) {
      beardShots[i].classList.toggle("hidden");
    }
  }

  function displayMade() {
    this.classList.toggle("made-text");
    let missedShots = qsa(".Missed-Shot");
    for (let i = 0; i < missedShots.length; i++) {
      missedShots[i].classList.toggle("showMade");
    }
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
