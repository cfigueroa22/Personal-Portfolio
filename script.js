"use strict";

// ! Navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const container = document.querySelector(".container");
const scroller = document.querySelector(".scroll-down");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  container.classList.toggle("active");
  scroller.classList.toggle("active");
});

document.querySelector(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

navMenu.addEventListener("scroll", (e) => {
  const scroll = e.target.scrollTop;

  if (scroll > 0) {
    navMenu.classList.toggle("active");
  }
});

//! Dark Mode
// let darkMode = localStorage.getItem("darkMode");
// const darkModeToggle = document.querySelector("#dark-mode-toggle");

// const enableDarkMode = () => {
//   document.body.classList.add("darkmode");
//   localStorage.setItem("darkMode", "enabled");
// };

// const disableDarkMode = () => {
//   document.body.classList.remove("darkmode");
//   localStorage.setItem("darkMode", null);
// };

// if (darkMode === "enabled") {
//   enableDarkMode();
// }

// darkModeToggle.addEventListener("click", () => {
//   darkMode = localStorage.getItem("darkMode");
//   if (darkMode !== "enabled") {
//     enableDarkMode();
//   } else {
//     disableDarkMode();
//   }
// });
const darkModeToggle = document.querySelector(".dark-mode-toggle");

darkModeToggle.addEventListener("click", () => {
  darkModeToggle.classList.toggle("dark-mode");
});
