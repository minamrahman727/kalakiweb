// Mobile menu toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Scroll effect for buttons
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Button animations
const learnMoreBtn = document.getElementById('learn-more-btn');
const servicesBtn = document.getElementById('services-btn');

learnMoreBtn.addEventListener('mouseenter', () => {
    learnMoreBtn.classList.add('animated');
});

learnMoreBtn.addEventListener('mouseleave', () => {
    learnMoreBtn.classList.remove('animated');
});

servicesBtn.addEventListener('mouseenter', () => {
    servicesBtn.classList.add('animated');
});

servicesBtn.addEventListener('mouseleave', () => {
    servicesBtn.classList.remove('animated');
});
