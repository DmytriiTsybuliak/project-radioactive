const mobileMenu = document.querySelector(".mobile-menu");

const shirmOpenButton = document.querySelector(".burger-menu");
shirmOpenButton.addEventListener('click', (event) => {
    mobileMenu.classList.remove("menu-is-hidden");
});

const shirmCloseButton = document.querySelector(".shirm-close-button");
shirmCloseButton.addEventListener('click', (event) => {
    mobileMenu.classList.add("menu-is-hidden");
});

