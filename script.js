// ===== MOBILE NAVIGATION =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
    });
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.borderBottom = '1px solid rgba(99, 102, 241, 0.2)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
    }
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

// ===== DEBOUNCE =====
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = () => {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// ===== SUBTLE PARALLAX =====
function initParallax() {
    window.addEventListener('scroll', debounce(() => {
        const scrolled = window.pageYOffset;
        document.querySelectorAll('.floating-elements .element').forEach((el, i) => {
            el.style.transform = `translateY(${scrolled * (0.15 + i * 0.04)}px)`;
        });
    }, 16));
}

// ===== MOUSE HOVER RADIAL EFFECT =====
function initAdvancedHovers() {
    document.querySelectorAll('.project-card, .tech-category, .contact-card, .timeline-item').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', (e.clientX - rect.left) + 'px');
            card.style.setProperty('--mouse-y', (e.clientY - rect.top) + 'px');
        });
    });
}

// ===== ACTIVE NAV LINK HIGHLIGHTING =====
window.addEventListener('scroll', debounce(() => {
    let current = '';
    document.querySelectorAll('section[id]').forEach(section => {
        if (scrollY >= section.offsetTop - 200) {
            current = section.getAttribute('id');
        }
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}));

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    initParallax();
    initAdvancedHovers();

    document.querySelectorAll('.project-card, .tech-category, .timeline-item, .contact-card').forEach(el => {
        observer.observe(el);
    });

    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});

console.log('Pedro Lucas Vergueiro — AI Researcher & Founder | github.com/pedrovergueiro/dNaty');
