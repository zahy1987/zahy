
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
      };
      
      const formMessage = document.getElementById('formMessage');
      
      // Aici ar trebui să integrezi un serviciu de trimitere email-uri
      // Pentru moment, afișăm un mesaj de succes
      formMessage.innerHTML = '<div class="success-message"><i class="fas fa-check-circle"></i> Thank you! Your message has been sent. I\'ll get back to you soon at ' + formData.email + '.</div>';
      formMessage.style.display = 'block';
      
      // Resetează formularul
      document.getElementById('contactForm').reset();
      
      // Ascunde mesajul după 5 secunde
      setTimeout(() => {
        formMessage.style.display = 'none';
      }, 5000);
    });