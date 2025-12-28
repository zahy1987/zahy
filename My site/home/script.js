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