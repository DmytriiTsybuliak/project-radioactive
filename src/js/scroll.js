const scrollBtn = document.getElementById('scrollTopBtn');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
}

scrollBtn.addEventListener('click', scrollTop);

function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.addEventListener('click', scrollTop);
  } else {
    scrollBtn.removeEventListener('click', scrollTop);
  }
}
