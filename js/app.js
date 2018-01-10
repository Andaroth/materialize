$(document).ready(function() {
  // Parallax
  $('.parallax').parallax();
  // Carousel
  $('.carousel.carousel-slider').carousel({
    'dist': 10,
    'next': 2,
    'indicators': true
  });
  // Scrollfire
  var options = [
    {selector: '.scrollfire', offset: 200, function(el){showStaggeredList($(el))}}
  ];
  Materialize.scrollFire(options);
});