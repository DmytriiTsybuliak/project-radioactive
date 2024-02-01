const refs = {
  homeButtons: document.querySelectorAll('.home'),
  favoritesButtons: document.querySelectorAll('.favorites'),
};

function markCurrentPage() {
  if (window.location.href.endsWith('favorites.html')) {
    refs.favoritesButtons.forEach(favoritesButton => {
      favoritesButton.classList.add('current');
    });
  } else {
    refs.homeButtons.forEach(homeButton => {
      homeButton.classList.add('current');
    });
  }
}
markCurrentPage();

(() => {
  const linkers = {
    mobileMenu: document.querySelector('.mobile-menu'),
    body: document.querySelector('body'),
    shirmOpenButton: document.querySelector('.burger-menu'),
    shirmCloseButton: document.querySelector('.shirm-close-button'),
  };
  linkers.shirmOpenButton.addEventListener('click', toggleVisibility);
  linkers.shirmCloseButton.addEventListener('click', toggleVisibility);
  function toggleVisibility() {
    linkers.mobileMenu.classList.toggle('menu-is-hidden');
    linkers.body.classList.toggle('no-scroll');
  }
})();

// Pls don`t remove the follows:

// const mobileMenu = document.querySelector(".mobile-menu");
// const body = document.querySelector("body");

// const shirmOpenButton = document.querySelector(".burger-menu");
// shirmOpenButton.addEventListener('click', (event) => {
//     mobileMenu.classList.remove("menu-is-hidden");
//     body.classList.add("no-scroll");
// });

// const shirmCloseButton = document.querySelector(".shirm-close-button");
// shirmCloseButton.addEventListener('click', (event) => {
//     mobileMenu.classList.add("menu-is-hidden");
//     body.classList.remove("no-scroll");
// });
