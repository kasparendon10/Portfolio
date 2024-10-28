document.addEventListener('DOMContentLoaded', function() {
    // Evento del formulario, si existe en la página
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const nombre = document.getElementById('nombre').value;
            const correo = document.getElementById('correo').value;
            const mensaje = document.getElementById('mensaje').value;

            console.log("Nombre:", nombre);
            console.log("Correo:", correo);
            console.log("Mensaje:", mensaje);

            alert("Tu mensaje ha sido enviado. ¡Gracias por contactarme!");
        });
    }

    // Seleccionamos el botón de menú y la lista de navegación
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    // Evento para mostrar/ocultar el menú en móvil
    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('show'); // Activa o desactiva la clase 'show'
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos todas las imágenes de certificados y el contenedor de pantalla completa
    const images = document.querySelectorAll('.certificate');
    const fullscreenContainer = document.getElementById('fullscreenContainer');
    const fullscreenImg = document.getElementById('fullscreenImg');
    const closeBtn = document.getElementById('closeBtn');

    // Evento para abrir imagen en pantalla completa
    images.forEach(image => {
        image.addEventListener('click', function() {
            fullscreenImg.src = this.src;
            fullscreenContainer.style.display = 'flex';
        });
    });

    // Evento para cerrar la pantalla completa
    closeBtn.addEventListener('click', function() {
        fullscreenContainer.style.display = 'none';
    });

    // Cerrar al hacer clic fuera de la imagen
    fullscreenContainer.addEventListener('click', function(e) {
        if (e.target === fullscreenContainer) {
            fullscreenContainer.style.display = 'none';
        }
    });
});
