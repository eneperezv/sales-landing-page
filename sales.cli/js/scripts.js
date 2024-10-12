document.addEventListener('DOMContentLoaded', () => {
    console.log('Página cargada y lista para aumentar tus ventas 🚀');
});

document.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.scrollY;

    // Adjust the background position based on scroll
    parallax.style.backgroundPositionY = scrollPosition * 0.5 + 'px';

    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('transparent');
    } else {
        navbar.classList.remove('transparent');
    }
});
