
var image = document.getElementsByClassName('ione');
new simpleParallax(image, {
      scale: 1.8
});

var image = document.getElementsByClassName('itwo');
new simpleParallax(image, {
      scale: 1.6,
      orientation: 'left'
});

var image = document.getElementsByClassName('ithree');
new simpleParallax(image, {
      scale: 2.3,
      orientation: 'right'
});

var image = document.getElementsByClassName('ifour');
new simpleParallax(image, {
      scale: 1.6,
});

var image = document.getElementsByClassName('ifive');
new simpleParallax(image, {
      scale: 1.6,
      orientation: 'right'
});

var image = document.getElementsByClassName('isix');
new simpleParallax(image, {
      scale: 2.3,
      orientation: 'right'
});

{ origin: 'bottom' }
ScrollReveal({ distance: '20px' });
ScrollReveal().reveal('.logo', { origin: 'top' });
ScrollReveal().reveal('.tagline', { origin: 'bottom' });



