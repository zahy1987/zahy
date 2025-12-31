// Funcție pentru hamburger menu
function myFunction() {
  var topnav = document.querySelector(".topnav");
  
  if (topnav.classList.contains("responsive")) {
    topnav.classList.remove("responsive");
  } else {
    topnav.classList.add("responsive");
  }
}
    /* snow home */

      document.addEventListener('DOMContentLoaded', function() {
      const container = document.getElementById('snowflakes-container');
      const snowflakes = [
        '❄','❅','❆','✻','✼','❉','❊','❋','✽','✾',
        '✿','❇','❈','❃','❂','✺','✹','✷','✶','✵',
        '❀','✲','✱','✧','✦','✪','✫','✬','✭','✮',
        '✯','✰','✱','✲','✳','✴','✵','✶','✷','✸',
        '✹','✺','✻','✼','✽','✾','❄','❅','❆','❉'
      ];
      
      function createSnowflake() {    // Verifică dacă container-ul există
    if (!container) return;
    
    const snowflake = document.createElement('div');
    snowflake.className = 'absolute text-white -top-4 select-none pointer-events-none';
    snowflake.textContent = snowflakes[Math.floor(Math.random() * snowflakes.length)];
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.opacity = Math.random() * 1.6 + 0.4;
    snowflake.style.animation = `fall linear ${(Math.random() * 10 + 15)}s infinite`;
    snowflake.style.animationDelay = Math.random() * 0.1 + 's';
    
    container.appendChild(snowflake);
    
    setTimeout(() => {
        if (snowflake.parentNode) {
            snowflake.remove();
        }
    }, parseFloat(snowflake.style.animationDuration) * 1000 || 15000);
      }
      
      setInterval(createSnowflake, 500);
    });
  

    /* Forneti pe pagina Gallery */

    
      // =====================
      // GENERARE CONFETTI DINAMIC
      // - Creează 20 de elemente animate
      // - Forme diferite: ribbon (fâșii), square (pătrate), circle (cercuri), rectangle (dreptunghiuri)
      // =====================
      
      // Array cu toate tipurile de forme disponibile
      const shapes = [
        'ribbon-long',      // Fâșie lungă
        'ribbon-medium',    // Fâșie medie
        'ribbon-short',     // Fâșie scurtă
        'square',           // Pătrat
        'circle',           // Cerc
        'rectangle'         // Dreptunghi
      ];
      
      // Buclă pentru a crea 20 de bucăți de confetti
      for (let i = 0; i < 20; i++) {
        // Creează un nou element div
        const confetti = document.createElement('div');
        
        // Adaugă clasa de bază 'confetti'
        confetti.className = 'confetti';
        
        // Alege o formă aleatorie din array
        // Folosim modulo (%) pentru a cicla prin forme
        const randomShape = shapes[i % shapes.length];
        
        // Adaugă clasa cu forma specifică
        confetti.classList.add(randomShape);
        
        // Adaugă elementul în DOM (în body)
        document.body.appendChild(confetti);
      }
      
      // CSS-ul va gestiona:
      // - Poziția specifică pentru fiecare confetti (nth-child)
      // - Culorile gradient pentru fiecare bucată
      // - Viteza de cădere (animation-duration)
      // - Întârzierea înainte de start (animation-delay)
      
        // Mobile menu toggle
        function myFunction() {
            const links = document.getElementById("myLinks");
            links.style.display = links.style.display === "block" ? "none" : "block";
        }

        // Slideshow functionality
        document.addEventListener('DOMContentLoaded', function() {
            const projectCards = document.querySelectorAll('.project-card');

            projectCards.forEach(card => {
                const imagesString = card.getAttribute('data-images');
                const link = card.getAttribute('data-link');

                if (!imagesString) return;

                const imagePaths = imagesString.split(',').map(path => path.trim());
                
                if (imagePaths.length <= 1) return;

                const oldImg = card.querySelector('img.shop');
                if (!oldImg) return;

                const wrapper = oldImg.parentElement;
                const slideshowContainer = document.createElement('div');
                slideshowContainer.className = 'shop-slideshow';

                imagePaths.forEach((path, index) => {
                    const img = document.createElement('img');
                    img.src = path;
                    img.alt = `Project screenshot ${index + 1}`;
                    img.className = index === 0 ? 'active' : '';
                    slideshowContainer.appendChild(img);
                });

                const navContainer = document.createElement('div');
                navContainer.className = 'slideshow-nav';
                navContainer.innerHTML = `
                    <div class="nav-arrow prev-arrow">
                        <svg viewBox="0 0 24 24" fill="none">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </div>
                    <div class="nav-arrow next-arrow">
                        <svg viewBox="0 0 24 24" fill="none">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>
                `;

                const dotsContainer = document.createElement('div');
                dotsContainer.className = 'slideshow-dots';
                
                imagePaths.forEach((_, index) => {
                    const dot = document.createElement('div');
                    dot.className = `slideshow-dot ${index === 0 ? 'active' : ''}`;
                    dot.dataset.index = index;
                    dotsContainer.appendChild(dot);
                });

                slideshowContainer.appendChild(navContainer);
                slideshowContainer.appendChild(dotsContainer);
                oldImg.replaceWith(slideshowContainer);

                let currentIndex = 0;
                let slideInterval = null;
                const images = slideshowContainer.querySelectorAll('img');
                const dots = dotsContainer.querySelectorAll('.slideshow-dot');
                const prevArrow = navContainer.querySelector('.prev-arrow');
                const nextArrow = navContainer.querySelector('.next-arrow');

                function showImage(index) {
                    images.forEach(img => img.classList.remove('active'));
                    dots.forEach(dot => dot.classList.remove('active'));
                    images[index].classList.add('active');
                    dots[index].classList.add('active');
                    currentIndex = index;
                }

                function nextImage() {
                    showImage((currentIndex + 1) % imagePaths.length);
                }

                function prevImage() {
                    showImage((currentIndex - 1 + imagePaths.length) % imagePaths.length);
                }

                function startSlideshow() {
                    slideInterval = setInterval(nextImage, 4000);
                }

                function stopSlideshow() {
                    if (slideInterval) {
                        clearInterval(slideInterval);
                        slideInterval = null;
                    }
                }

                startSlideshow();
                card.addEventListener('mouseenter', stopSlideshow);
                card.addEventListener('mouseleave', startSlideshow);

                nextArrow.addEventListener('click', (e) => {
                    e.stopPropagation();
                    stopSlideshow();
                    nextImage();
                });

                prevArrow.addEventListener('click', (e) => {
                    e.stopPropagation();
                    stopSlideshow();
                    prevImage();
                });

                dotsContainer.addEventListener('click', function(e) {
                    e.stopPropagation();
                    if (e.target.classList.contains('slideshow-dot')) {
                        const index = parseInt(e.target.dataset.index);
                        if (!isNaN(index)) {
                            stopSlideshow();
                            showImage(index);
                        }
                    }
                });
            });
        });