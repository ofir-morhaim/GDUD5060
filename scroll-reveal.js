// scroll-reveal.js

(function() {
    const sections = document.querySelectorAll('.reveal');

    const revealSection = (entry) => {
        entry.target.classList.add('visible');
    };

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                revealSection(entry);
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
})();