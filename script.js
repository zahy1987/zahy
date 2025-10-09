document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".item:nth-child(2) .slide");
  let index = 0;

  if (slides.length > 0) {
    slides[index].classList.add("active");

    setInterval(() => {
      slides[index].classList.remove("active");
      index = (index + 1) % slides.length;
      slides[index].classList.add("active");
    }, 3000);
  }
});
document.querySelectorAll('.item').forEach(item => {
  const slides = item.querySelectorAll('.slide');
  if (slides.length <= 1) return; // dacă nu are slideshow

  let index = 0;
  slides[index].classList.add('active');

  setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, 3000);
});
