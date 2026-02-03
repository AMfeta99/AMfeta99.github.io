/**
 * Modern Enhancements for Personal Website
 * Features: Smooth Scroll, Back to Top, Loading Animation, Interactive Elements
 */

(function () {
    'use strict';

    // Dark mode functionality removed per user request

    // ========================================
    // BACK TO TOP BUTTON
    // ========================================
    function initBackToTop() {
        const backToTop = document.createElement('button');
        backToTop.className = 'back-to-top';
        backToTop.setAttribute('aria-label', 'Back to top');
        backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
        document.body.appendChild(backToTop);

        // Show/hide button based on scroll position
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        // Scroll to top on click
        backToTop.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ========================================
    // SMOOTH SCROLL ANIMATIONS
    // ========================================
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all sections and major elements
        const animatedElements = document.querySelectorAll('section, .spotlight, .features li, .certificate-card');
        animatedElements.forEach(function (el) {
            el.classList.add('fade-in');
            observer.observe(el);
        });
    }

    // ========================================
    // PAGE LOADER
    // ========================================
    function initPageLoader() {
        const loader = document.createElement('div');
        loader.className = 'page-loader';
        loader.innerHTML = '<div class="loader-spinner"></div>';
        document.body.insertBefore(loader, document.body.firstChild);

        // Hide loader when page is fully loaded
        window.addEventListener('load', function () {
            setTimeout(function () {
                loader.classList.add('hidden');
                setTimeout(function () {
                    loader.remove();
                }, 500);
            }, 500);
        });
    }

    // ========================================
    // ENHANCED CARD INTERACTIONS
    // ========================================
    function initCardInteractions() {
        const cards = document.querySelectorAll('.spotlight, .certificate-card, .features li');

        cards.forEach(function (card) {
            card.addEventListener('mouseenter', function () {
                this.style.transition = 'all 0.3s ease';
            });
        });
    }

    // ========================================
    // TECH STACK ICONS ANIMATION
    // ========================================
    function initTechStackAnimation() {
        const techItems = document.querySelectorAll('.tech-item');

        techItems.forEach(function (item, index) {
            setTimeout(function () {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';

                setTimeout(function () {
                    item.style.transition = 'all 0.5s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 50);
            }, index * 50);
        });
    }

    // ========================================
    // SMOOTH ANCHOR SCROLLING
    // ========================================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href !== '#' && href !== '#menu') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }

    // ========================================
    // TYPING ANIMATION FOR HERO TEXT
    // ========================================
    function initTypingAnimation() {
        const heroText = document.querySelector('#banner h2');
        if (heroText) {
            const text = heroText.textContent;
            heroText.textContent = '';
            heroText.style.opacity = '1';

            let i = 0;
            function typeWriter() {
                if (i < text.length) {
                    heroText.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            }

            setTimeout(typeWriter, 500);
        }
    }

    // ========================================
    // PARALLAX EFFECT FOR BANNER
    // ========================================
    function initParallax() {
        const banner = document.querySelector('#banner');
        if (banner) {
            window.addEventListener('scroll', function () {
                const scrolled = window.pageYOffset;
                const parallax = scrolled * 0.5;
                banner.style.transform = 'translateY(' + parallax + 'px)';
            });
        }
    }

    // ========================================
    // INITIALIZE ALL FEATURES
    // ========================================
    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function () {
                initializeFeatures();
            });
        } else {
            initializeFeatures();
        }
    }

    function initializeFeatures() {
        initPageLoader();
        initBackToTop();
        initScrollAnimations();
        initCardInteractions();
        initSmoothScroll();

        // Initialize tech stack animation if the section exists
        if (document.querySelector('.tech-stack')) {
            setTimeout(initTechStackAnimation, 500);
        }

        // Add modern typography class
        document.body.classList.add('modern-typography');
    }

    // Start initialization
    init();

})();
