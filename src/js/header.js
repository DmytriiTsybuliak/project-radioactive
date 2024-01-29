const mobileMenu = document.querySelector(".mobile-menu");
const shirmOpenButton = document.querySelector(".burger-menu");
shirmOpenButton.addEventListener('click', (event) => {
    mobileMenu.classList.remove("menu-is-hidden");
});

const shirmCloseButton = document.querySelector(".shirm-close-button");
shirmCloseButton.addEventListener('click', (event) => {
    mobileMenu.classList.add("menu-is-hidden");
});

const homeIsCurrentPage = document.querySelector(".home")
const favoritesIsCurrentPage = document.querySelector(".favorites")
function markCurrentPage() {
    if (window.location.href.endsWith('index.html')) {
        homeIsCurrentPage.classList.add("current");
    }
    else if (window.location.href.endsWith('favorites.html')) {
        favoritesIsCurrentPage.classList.add("current");
    }
}
markCurrentPage();
