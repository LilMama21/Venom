let menuButton = document.querySelector(".menu--button");
let menu = document.querySelector(".navigation--menu");
let menuCloseButton = document.querySelector(".menu--close");

menuButton.addEventListener("click", () => {
  menu.classList.add("is--active");
  menuCloseButton.classList.add("is--active");
});
menuCloseButton.addEventListener("click", () => {
  menu.classList.remove("is--active");
  menuCloseButton.classList.remove("is--active");
});
