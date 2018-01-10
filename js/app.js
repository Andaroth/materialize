$(document).ready(function() {
  $('.parallax').parallax();
  $('.carousel.carousel-slider').carousel({
    dist: 10,
    next: 2,
    duration: 2000,
    indicators: true,
    fullWidth: true
  });
  $('.scrollspy').scrollSpy();
});