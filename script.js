document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null, // use the viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('box')) {
                    entry.target.classList.add('animate-left');
                } else if (entry.target.classList.contains('box2')) {
                    entry.target.classList.add('animate-right');
                }
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const box = document.querySelector('.box');
    const box2 = document.querySelector('.box2');

    if (box) observer.observe(box);
    if (box2) observer.observe(box2);
});
