const scrollBtn = document.getElementById('scrollTopBtn');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = 'block';
    scrollBtn.addEventListener('click', scrollTop);
  } else {
    scrollBtn.style.display = 'none';
    scrollBtn.removeEventListener('click', scrollTop);
  }
}

scrollBtn.addEventListener('click', scrollTop);

function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
