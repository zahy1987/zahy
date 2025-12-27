/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
    function myFunction() {
      var x = document.getElementById("myLinks");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }


    /* snow */

      document.addEventListener('DOMContentLoaded', function() {
      const container = document.getElementById('snowflakes-container');
      const snowflakes = [
        '❄','❅','❆','✻','✼','❉','❊','❋','✽','✾',
        '✿','❇','❈','❃','❂','✺','✹','✷','✶','✵',
        '❀','✲','✱','✧','✦','✪','✫','✬','✭','✮',
        '✯','✰','✱','✲','✳','✴','✵','✶','✷','✸',
        '✹','✺','✻','✼','✽','✾','❄','❅','❆','❉'
      ];
      
      function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.className = 'absolute text-white -top-4 select-none pointer-events-none';
        snowflake.textContent = snowflakes[Math.floor(Math.random() * snowflakes.length)];
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.opacity = Math.random() * 1.6 + 0.4;
        snowflake.style.animation = `fall linear ${(Math.random() * 10 + 15)}s infinite`;
        snowflake.style.animationDelay = Math.random() * 0.1 + 's';
        
        container.appendChild(snowflake);
        
        setTimeout(() => {
          snowflake.remove();
        }, parseFloat(snowflake.style.animationDuration) * 1000 || 15000);
      }
      
      setInterval(createSnowflake, 500);
    });
  