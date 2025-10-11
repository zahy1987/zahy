document.querySelectorAll('.item').forEach(container => {
  const slides = container.querySelectorAll('.slide');
  if (slides.length < 2) return;

  let index = 0;
  setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, 4000); // schimbare la fiecare 3 secunde
});
