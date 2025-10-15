// =============================================
// ANIMATIONS JAVASCRIPT FILE
// Handles scroll animations and other effects
// =============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
});

/**
 * Initialize all animations
 */
function initializeAnimations() {
    initializeScrollAnimations();
    initializeSkillAnimations();
    initializeProjectHoverEffects();
    
    console.log('Animations initialized successfully');
}

/**
 * Scroll Animations using Intersection Observer
 * Animates elements when they come into view
 */
function initializeScrollAnimations() {
    // Check if Intersection Observer is supported
    if (!('IntersectionObserver' in window)) {
        console.log('Intersection Observer not supported, using fallback');
        animateAllElements(); // Fallback for older browsers
        return;
    }
    
    // Configuration for the observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    // Create the observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when element is in view
                entry.target.classList.add('animate-in');
                
                // Stop observing after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Elements to observe
    const elementsToAnimate = document.querySelectorAll(
        '.section, .project-card, .skill-tag, .form-group'
    );
    
    // Initialize elements with hidden state and start observing
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    // CSS class for animation
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

/**
 * Fallback animation for browsers without Intersection Observer
 */
function animateAllElements() {
    const elements = document.querySelectorAll(
        '.section, .project-card, .skill-tag, .form-group'
    );
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 100 * index);
    });
}

/**
 * Skill Tag Animations
 * Adds interactive effects to skill tags
 */
function initializeSkillAnimations() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        // Add hover effect
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click effect
        tag.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

/**
 * Project Card Hover Effects
 * Enhances project card interactions
 */
function initializeProjectHoverEffects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const projectImage = card.querySelector('.project-image');
        
        card.addEventListener('mouseenter', function() {
            // Add subtle scale effect
            this.style.transform = 'translateY(-10px) scale(1.02)';
            
            // Add glow effect to project image
            if (projectImage) {
                projectImage.style.filter = 'brightness(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            // Reset transformations
            this.style.transform = 'translateY(0) scale(1)';
            
            // Reset image effect
            if (projectImage) {
                projectImage.style.filter = 'brightness(1)';
            }
        });
    });
}

/**
 * Typing Effect for Hero Section (Optional)
 * Can be enabled if you want typing animation
 */
function initializeTypingEffect() {
    const heroTitle = document.querySelector('.hero-content h1');
    if (!heroTitle) return;
    
    const originalText = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typingSpeed = 100; // ms per character
    
    function typeWriter() {
        if (i < originalText.length) {
            heroTitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, typingSpeed);
        }
    }
    
    // Start typing effect
    typeWriter();
}

/**
 * Parallax Scrolling Effect (Optional)
 * Adds depth to the hero section
 */
function initializeParallaxEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        hero.style.transform = `translateY(${rate}px)`;
    });
}

/**
 * Initialize all optional animations
 * Comment out what you don't need
 */
function initializeOptionalAnimations() {
    // Enable typing effect (uncomment if wanted)
    // initializeTypingEffect();
    
    // Enable parallax effect (uncomment if wanted)
    // initializeParallaxEffect();
}

// Initialize optional animations
initializeOptionalAnimations();

// Export functions for use in other modules (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeAnimations,
        initializeScrollAnimations
    };
}