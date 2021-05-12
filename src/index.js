"use strict";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UnderdogSvg from "./Cd";

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
    id("quarter-range").addEventListener("input", displayQuarter);
  }

  /**
   * Hides and shows the shot data points depending on the slider value
   */
  function displayQuarter() {
    let message = qs(".info-mess");
    let perQuarterShots = qsa(".q" + this.value);
    let shotCircles =
      id("nba-interactive").children[0].children[0].getElementsByTagName(
        "circle"
      );
    for (let i = 0; i < shotCircles.length; i++) {
      shotCircles[i].classList.add("hidden");
    }
    for (let i = 0; i < perQuarterShots.length; i++) {
      perQuarterShots[i].classList.remove("hidden");
    }
    if (this.value == 0) {
      message.textContent = "Full game shots";
      for (let i = 0; i < shotCircles.length; i++) {
        shotCircles[i].classList.remove("hidden");
      }
    } else if (this.value == 5) {
      message.textContent = "Over Time shots";
      console.log(quarterCallClass);
    } else {
      message.textContent = "Quarter " + this.value + " shots";
    }
  }

  /**
   * Creates sticky menu bar
   */
  function stickBar() {
    let menu = qs(".menu");
    menu.classList.toggle("sticky", window.scrollY > 0);
  }

  /**
   * Displays harden shots by toggling the special hidden class for Harden
   */
  function displayHarden() {
    let container = document.getElementById("message-cont");
    container.innerHTML = "";
    this.classList.toggle("clicked-img");
    let beardShots = qsa(".beard-shots");
    for (let i = 0; i < beardShots.length; i++) {
      beardShots[i].classList.toggle("hidden-harden");
    }
  }

  function displayMade() {
    let container = document.getElementById("message-cont");
    container.innerHTML = "";
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
