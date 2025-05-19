const menuButtons = document.querySelectorAll(".menu-button");
const close = document.querySelector(".menu-button-close");
const nav = document.querySelector(".menu-nav");

menuButtons.forEach(menu => {
  menu.addEventListener("click", () => {
    nav.classList.toggle("hidden");
    nav.classList.toggle("flex");
  });
});

close.addEventListener("click", () => {
  nav.classList.toggle("hidden");
  nav.classList.toggle("flex");
});
