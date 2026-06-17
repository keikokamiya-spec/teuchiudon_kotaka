document.addEventListener('DOMContentLoaded', function () {
  // Hero carousel: stagger slide animation delays so each fades in turn
  var slides = document.querySelectorAll('.carousel-slide');
  slides.forEach(function (slide, i) {
    slide.style.animationDelay = (i * (20 / slides.length)) + 's';
  });

  // Hamburger / mobile nav toggle
  var hamburger = document.querySelector('.hamburger');
  var nav = document.querySelector('.global-nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      nav.classList.toggle('active');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
      });
    });
  }
});
