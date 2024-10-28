document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevenir el envío real del formulario

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;

    // Aquí podrías enviar los datos a un servidor o mostrar un mensaje de éxito
    console.log("Nombre:", nombre);
    console.log("Correo:", correo);
    console.log("Mensaje:", mensaje);

    alert("Tu mensaje ha sido enviado. ¡Gracias por contactarme!");
});
// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el icono de menú y agrega un evento 'click'
    document.querySelector('.menu-icon').addEventListener('click', function() {
        // Alterna la clase 'show' en el menú para mostrar/ocultar el menú desplegable
        document.querySelector('header ul').classList.toggle('show');
    });
});

