console.log('Hi world');
// Exemplu JS pentru hamburger:
document.querySelector('.menu-toggle').onclick = function() {
  document.querySelector('.menubar ul').classList.toggle('open');
};
const slides = document.querySelectorAll('.item:nth-child(2) .slide');
let index = 0;

setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 2000); // la fiecare 5 secunde
