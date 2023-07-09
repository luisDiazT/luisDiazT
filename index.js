window.addEventListener("load", () => {

    document.body.style.setProperty("opacity", "1", "important")
    cambiarContenidoSegunPantalla();

});
    function esMovil() {
        console.log(window.innerWidth);
    return window.innerWidth <= 768; 
  }

  // Función para cambiar el contenido del div en dispositivos móviles
  function cambiarContenidoMovil() {
    var fondoCuadrado2 = document.getElementById('fondoCuadrado2');
    fondoCuadrado2.innerHTML = '';
  }

  // Función para cambiar el contenido del div en pantallas no móviles
  function cambiarContenidoNoMovil() {
    var fondoCuadrado2 = document.getElementById('fondoCuadrado2');
    fondoCuadrado2.innerHTML = `<svg preserveAspectRatio="none" viewBox="0 0 1200 290" xmlns="http://www.w3.org/2000/svg"
    style="fill: #dda15e; width: 100%; height: 185vh; transform: rotate(180deg) scaleX(-1);">
    <path d="M1200 200L0 16.48V0h1200v200z" />
</svg>`;
  }

  // Función para manejar el cambio de tamaño de la pantalla
  function cambiarContenidoSegunPantalla() {
    esMovil()?cambiarContenidoMovil():cambiarContenidoNoMovil();
   
  }

  // Evento resize para detectar el cambio de tamaño de la pantalla
  window.addEventListener('resize', cambiarContenidoSegunPantalla);

  // Llamar a la función al cargar la página
  const imagen = document.getElementById("avatar");
let veces = 0;

function tiempoAleatorio() {
  let aleatorio = Math.floor(Math.random() * 5000);
  return aleatorio;
}

function rotarClockwise() {
  imagen.style.transform = "rotateY(180deg)";
  setTimeout(() => {
    imagen.style.transform = "rotateY(360deg)";
  }, 500);
}

function rotarCounterClockwise() {
  imagen.style.transform = "rotateY(360deg)";
  setTimeout(() => {
    imagen.style.transform = "rotateY(180deg)";
  }, 500);
}

function rotacion() {
  if (veces == 0) {
    rotarClockwise();
    veces++;
  } else {
    rotarCounterClockwise();
    veces = 0;
  }
}

setInterval(rotacion, tiempoAleatorio());