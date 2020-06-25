const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav_link");
const link = document.querySelector(".nav_link li");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("open");
});
