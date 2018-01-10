$(document).ready(function() {
  // Parallax
  $('.parallax').parallax();
  // Carousel
  $('.carousel.carousel-slider').carousel({
    dist: 10,
    next: 2,
    duration: 2000,
    indicators: true,
    fullWidth: true
  });
  // Scrollspy
  $('.scrollspy').scrollSpy();
});