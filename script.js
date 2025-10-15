<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gabriel Zaharia - Portfolio</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <!-- Main Stylesheet -->
    <link rel="stylesheet" href="css/style.css">
    <!-- Responsive Stylesheet -->
    <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
    <!-- Header Section -->
    <header class="header">
        <nav class="nav">
            <a href="#" class="logo">Gabriel<span>Zaharia</span></a>
            <!-- Desktop Navigation Menu -->
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <!-- Mobile Menu Button -->
            <div class="mobile-menu">
                <i class="fas fa-bars"></i>
            </div>
        </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="hero-content">
            <h1>Hi, I'm Gabriel Zaharia</h1>
            <p>Passionate Developer & Creative Problem Solver</p>
            <a href="#projects" class="cta-button">View My Projects</a>
        </div>
    </section>

    <!-- About Section -->
    <section class="section" id="about">
        <div class="section-title">
            <h2>About Me</h2>
            <p>Get to know more about my skills and experience</p>
        </div>
        <div class="about-content">
            <div class="profile-container">
                <img src="assets/images/profile.jpg" alt="Gabriel Zaharia" class="profile-image">
            </div>
            <div class="about-text">
                <h3>Passion for Technology</h3>
                <p>Hello! I'm Gabriel Zaharia, a developer passionate about technology and creative solutions. I love combining logic with design to create functional, elegant, and easy-to-use web applications.</p>
                <p>My experience covers HTML/CSS, JavaScript, React, Node.js, and Python, and my passion for UI/UX helps me build intuitive interfaces that provide a pleasant user experience.</p>
                <div class="skills">
                    <span class="skill-tag">HTML/CSS</span>
                    <span class="skill-tag">JavaScript</span>
                    <span class="skill-tag">React</span>
                    <span class="skill-tag">Node.js</span>
                    <span class="skill-tag">Python</span>
                    <span class="skill-tag">UI/UX</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section class="section" id="projects">
        <div class="section-title">
            <h2>My Projects</h2>
            <p>Some of my recent works</p>
        </div>
        <div class="projects-grid">
            <!-- Project 1 -->
            <div class="project-card">
                <div class="project-image">
                    <i class="fas fa-shopping-cart"></i>
                </div>
                <div class="project-content">
                    <h3>E-commerce Site</h3>
                    <p>A complete e-commerce site with full functionality including shopping cart, user authentication, and payment processing.</p>
                    <div class="project-tech">
                        <span>React</span>
                        <span>Node.js</span>
                        <span>MongoDB</span>
                    </div>
                </div>
            </div>
            <!-- Project 2 -->
            <div class="project-card">
                <div class="project-image">
                    <i class="fas fa-mobile-alt"></i>
                </div>
                <div class="project-content">
                    <h3>Weather App</h3>
                    <p>Weather application with modern and responsive interface, real-time data, and location-based forecasts.</p>
                    <div class="project-tech">
                        <span>JavaScript</span>
                        <span>API</span>
                        <span>CSS3</span>
                    </div>
                </div>
            </div>
            <!-- Project 3 -->
            <div class="project-card">
                <div class="project-image">
                    <i class="fas fa-gamepad"></i>
                </div>
                <div class="project-content">
                    <h3>Game Development</h3>
                    <p>Browser game with 2D graphics and interesting mechanics, built with modern web technologies.</p>
                    <div class="project-tech">
                        <span>HTML5</span>
                        <span>Canvas</span>
                        <span>JavaScript</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="section" id="contact">
        <div class="section-title">
            <h2>Contact</h2>
            <p>Let's work together!</p>
        </div>
        <form class="contact-form">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" required>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" required>
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" rows="5" required></textarea>
            </div>
            <button type="submit" class="submit-btn">Send Message</button>
        </form>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="social-links">
            <a href="#"><i class="fab fa-github"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
        </div>
        <p>&copy; 2024 Gabriel Zaharia. All rights reserved.</p>
    </footer>

    <!-- JavaScript Files -->
    <script src="js/main.js"></script>
    <script src="js/animations.js"></script>
</body>
</html>
