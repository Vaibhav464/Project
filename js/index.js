var navbar = document.getElementById('navbar');
var initialOffset = navbar.getBoundingClientRect().left;

window.addEventListener('scroll', function() {
  var scrollX = window.pageXOffset || document.documentElement.scrollLeft;
  navbar.style.left = initialOffset - scrollX + 'px';
});
