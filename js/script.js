// ===================================
// PORTFOLIO JAVASCRIPT
// Author: Maria Salop
// Version: 1.0
// ===================================

// ===================================
// 1. LOADER
// ===================================

// Hide loader when page is fully loaded
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(function() {
            loader.style.display = 'none';
        }, 500); // Small delay for smooth transition
    }
});

// ===================================
// 2. SMOOTH SCROLLING
// ===================================

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// 3. NAVBAR EFFECTS
// ===================================

// Add shadow to navbar on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Highlight active nav link based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===================================
// 4. MOBILE MENU
// ===================================

function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (navLinks) {
        navLinks.classList.toggle('mobile-active');
    }
    
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
    }
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        const mobileMenu = document.querySelector('.mobile-menu');
        
        if (navLinks) {
            navLinks.classList.remove('mobile-active');
        }
        if (mobileMenu) {
            mobileMenu.classList.remove('active');
        }
    });
});

// ===================================
// 5. FADE IN ANIMATIONS
// ===================================

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: stop observing after animation
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});

// ===================================
// 6. TYPING ANIMATION
// ===================================

// Typing effect for hero title
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.opacity = '1';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing after a small delay
        setTimeout(typeWriter, 500);
    }
});

// ===================================
// 7. CV DOWNLOAD
// ===================================

function downloadCV() {
    // Create a temporary link element
    const link = document.createElement('a');
    
    // Set the path to your CV file
    link.href = 'documents/CV_MariaSalop.pdf'; // Make sure this path matches your folder structure
    
    // Set the download filename
    link.download = 'Maria_Salop_CV.pdf';
    
    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Optional: Show a message
    console.log('Downloading CV...');
    
    // If CV doesn't exist yet, show an alert
    link.onerror = function() {
        alert('Please add your CV.pdf file to the documents folder first!');
    };
}

// ===================================
// 8. PROJECT CARDS HOVER
// ===================================

// Add tilt effect on project cards (optional enhancement)
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});

// ===================================
// 9. SKILL TAGS ANIMATION
// ===================================

// Animate skill tags on hover
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===================================
// 10. DYNAMIC YEAR IN FOOTER
// ===================================

// Update copyright year automatically
document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('footer p');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = `&copy; ${currentYear} Maria Salop. Built with passion for AI & Data Science.`;
    }
});

// ===================================
// 11. SCROLL TO TOP
// ===================================

// Optional: Add scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ===================================
// 12. CONSOLE MESSAGE
// ===================================

// Fun console message for developers
console.log('%c Welcome to Maria Salop\'s Portfolio! 🚀', 
    'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%c Looking for a talented Data Science intern? Let\'s connect! 📧', 
    'color: #22d3ee; font-size: 14px;');

// ===================================
// 13. PERFORMANCE MONITORING
// ===================================

// Log page load time (optional)
window.addEventListener('load', function() {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log(`Page loaded in ${loadTime}ms ⚡`);
});

// ===================================
// 14. ERROR HANDLING
// ===================================

// Global error handler (optional)
window.addEventListener('error', function(e) {
    console.error('An error occurred:', e.error);
    // You could send this to an error tracking service
});

// ===================================
// END OF SCRIPT
// ===================================