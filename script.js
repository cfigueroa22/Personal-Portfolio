"use strict";

// ! Navbar
// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");
// const container = document.querySelector(".container");
// const scroller = document.querySelector(".scroll-down");

// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("active");
//   navMenu.classList.toggle("active");
//   container.classList.toggle("active");
//   scroller.classList.toggle("active");
// });

// document.querySelector(".nav-link").forEach((n) =>
//   n.addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
//   })
// );

// navMenu.addEventListener("scroll", (e) => {
//   const scroll = e.target.scrollTop;

//   if (scroll > 0) {
//     navMenu.classList.toggle("active");
//   }
// });

//! Script to Send Email
function sendEmail() {
  Email.send({
    Host: "smtp.yahoo.com",
    Username: "username",
    Password: "password",
    To: "them@website.com",
    From: document.getElementById("email").value,
    Subject: document.getElementById("subject").value,
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Phone Number: " +
      document.getElementById("phone").value +
      "<br> Message: " +
      document.getElementById("message").value,
  }).then((message) => alert("Thank you! I will respond back ASAP!"));
}
