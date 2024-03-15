"use strict";

var hamburger = document.querySelector(".hamburger");
var nav = document.querySelector("nav");
var state = false;
hamburger.addEventListener("click", function () {
  if (state == true) {
    hamburger.classList.remove("is-active");
    nav.classList.remove("is-active");
    state = false;
  } else {
    hamburger.classList.add("is-active");
    nav.classList.add("is-active");
    state = true;
  }
});