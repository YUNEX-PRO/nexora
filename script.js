// NEXORA — Scroll Animations

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.animate(
                [
                    { opacity: 0, transform: 'translateY(25px)' },
                    { opacity: 1, transform: 'translateY(0)' }
                ],
                {
                    duration: 700,
                    easing: 'ease-out',
                    fill: 'forwards'
                }
            );

            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(
    '.section, .project-card, .social-card, .game-card, .channel-link'
).forEach(element => observer.observe(element));