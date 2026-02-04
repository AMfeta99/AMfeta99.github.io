// Modern Publications Page JavaScript
// Handles expandable content with smooth animations

document.addEventListener('DOMContentLoaded', function () {
    // Get all read more buttons
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Find the expandable content in the same publication card
            const publicationAbstract = this.closest('.publication-abstract');
            const expandableContent = publicationAbstract.querySelector('.expandable-content');
            const btnText = this.querySelector('.btn-text');

            // Toggle expanded state
            const isExpanded = expandableContent.classList.contains('expanded');

            if (isExpanded) {
                // Collapse
                expandableContent.classList.remove('expanded');
                this.classList.remove('expanded');
                btnText.textContent = 'Read more';

                // Smooth scroll to button
                setTimeout(() => {
                    this.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            } else {
                // Expand
                expandableContent.classList.add('expanded');
                this.classList.add('expanded');
                btnText.textContent = 'Read';
            }
        });
    });

    // Add smooth scroll behavior for publication links
    const publicationLinks = document.querySelectorAll('.publication-link');

    publicationLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Add a subtle animation on click
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all publication cards
    const publicationCards = document.querySelectorAll('.publication-card');
    publicationCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
