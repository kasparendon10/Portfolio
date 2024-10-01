// Función para manejar el desplazamiento suave
function smoothScroll(target, duration) {
  var targetElement = document.querySelector(target);
  var targetPosition = targetElement.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Agregamos el evento click a todos los enlaces del menú
var menuLinks = document.querySelectorAll('header nav a');
menuLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    var target = this.getAttribute('href');
    smoothScroll(target, 1000);
  });
});

// Función para animar la entrada de las secciones
function animateSections() {
  var sections = document.querySelectorAll('section');
  sections.forEach(function(section) {
    var sectionTop = section.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if(sectionTop < screenPosition) {
      section.classList.add('animate');
    }
  });
}

// Función debounce para mejorar el rendimiento del scroll
function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Llamamos a la función cuando se carga la página y cuando se hace scroll
window.addEventListener('load', animateSections);
window.addEventListener('scroll', debounce(animateSections));

// Cambiar el color del header al hacer scroll usando clases
window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Función para activar/desactivar el modo oscuro
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  
  // Guardar la preferencia del usuario en localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}

// Obtener el botón de modo oscuro
const darkModeToggle = document.getElementById('darkModeToggle');

// Añadir evento de clic al botón
darkModeToggle.addEventListener('click', toggleDarkMode);

// Comprobar el tema guardado en localStorage al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
});