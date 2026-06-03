// Mobile menu toggle
const mobileBtn = document.getElementById('mobileMenuBtn');
const navLinksEl = document.getElementById('navLinks');

if (mobileBtn) {
  mobileBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinksEl.classList.toggle('active');
  });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinksEl.classList.remove('active');
  });
});

// Intersection Observer for fade-up animations
const fadeElements = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(el => observer.observe(el));

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (navLinksEl.classList.contains('active')) {
        navLinksEl.classList.remove('active');
      }
    }
  });
});

console.log('Barber Shop website loaded');