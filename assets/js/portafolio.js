document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('show');
});

// Mostrar/ocultar el botón "Volver arriba"
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Funcionalidad para volver arriba suavemente
backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
