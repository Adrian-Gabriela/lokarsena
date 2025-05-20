const menuButtons = document.querySelectorAll(".menu-button");
const close = document.querySelector(".menu-button-close");
const nav = document.querySelector(".menu-nav");
const celularInput = document.getElementById('celular');
const telefoneInput = document.getElementById('telefone');


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

  IMask(celularInput, {
    mask: '(00) 00000-0000'
  });
  IMask(telefoneInput, {
    mask: '(00) 00000-0000'
  });