"use strict";
const arrows = document.querySelector(".fas");
const listItems = document.querySelectorAll("li");
const divContainer = document.querySelector(".container");

arrows.addEventListener("click", function () {
  arrows.style.opacity = 0;
  listItems.forEach(function (item) {
    item.style.opacity = 100;
    item.style.cursor = "pointer";
    item
      .querySelectorAll(".cursor")
      .forEach((link) => link.classList.remove("cursor"));
  });
});
