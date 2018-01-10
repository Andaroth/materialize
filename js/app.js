$(document).ready(function() {
  // Parallax
  $('.parallax').parallax();
  // Carousel
  $('.carousel.carousel-slider').carousel({
    'dist': 10,
    'next': 2,
    'indicators': true
  });
  // Scrollspy
  $('.scrollspy').scrollSpy();
});