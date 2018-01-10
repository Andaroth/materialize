$(document).ready(function() {
  $('.parallax').parallax();
  $('.carousel').carousel({fullWidth: true,duration:250});
  $('.scrollspy').scrollSpy();
  setInterval(()=>{$('.carousel').carousel('next')},3000)
});