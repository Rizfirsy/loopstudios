const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close-menu");
const menu = document.querySelector(".nav--menu_mobile");

hamburger.addEventListener("click", () => {
  menu.classList.remove("display-none");
});
close.addEventListener("click", () => {
  menu.classList.add("display-none");
});
