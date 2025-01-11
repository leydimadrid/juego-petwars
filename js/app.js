import {
  aleatorio,
  mostrarSeccion,
  reiniciarJuego,
  restaurarSeccion,
} from "./utils.js";

const inputMascota = document.getElementById("nombre-mascota");
const inputGatico = document.getElementById("gatico");
const inputPerrito = document.getElementById("perrito");
const inputPinguino = document.getElementById("pinguino");
const spanMascotaJugador = document.getElementById("mascota-jugador");
const spanMascotaEnemigo = document.getElementById("mascota-enemigo");

const botonMascotaJugador = document.getElementById("boton-mascota");
const botonFuego = document.getElementById("boton-fuego");
const botonAgua = document.getElementById("boton-agua");
const botonTierra = document.getElementById("boton-tierra");
const botonAtras = document.getElementById("boton-atras");

const ataqueSeleccionado = document.getElementById("ataque-seleccionado");
const sectionMensajes = document.getElementById("resultado");
const ataquesDelJugador = document.getElementById("ataques-del-jugador");
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo");
const botonReiniciar = document.getElementById("boton-reiniciar");

const spanVidasJugador = document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo");

let vidasJugador = 3;
let vidasEnemigo = 3;

let ataqueJugador;
let ataqueEnemigo;
let nombreMascota = inputMascota.value;

inputMascota.addEventListener("input", (e) => {
  nombreMascota = e.target.value;
  spanMascotaJugador.textContent = nombreMascota;
  guardarEstado();
});

ataqueSeleccionado.style.display = "none";

function iniciarJuego() {
  restaurarSeccion();
  restaurarEstado();
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
  botonFuego.addEventListener("click", ataqueFuego);
  botonAgua.addEventListener("click", ataqueAgua);
  botonTierra.addEventListener("click", ataqueTierra);
}

botonAtras.addEventListener("click", () => {
  mostrarSeccion("seleccionar-mascota");
});

const mascotas = {
  1: "Michu",
  2: "Firulais",
  3: "Manchas",
};

//Seleccionar mascotas
function seleccionarMascotaJugador() {
  if (!validarNombre()) {
    return;
  }
  if (inputGatico.checked) {
    spanMascotaJugador.innerText = nombreMascota;
  } else if (inputPerrito.checked) {
    spanMascotaJugador.innerText = nombreMascota;
  } else if (inputPinguino.checked) {
    spanMascotaJugador.innerText = nombreMascota;
  } else {
    Swal.fire("Debes seleccionar una mascota 😊");
    return;
  }

  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
  seleccionarMascotaEnemigo();
  mostrarSeccion("seleccionar-ataque");
}

function validarNombre() {
  if (!nombreMascota) {
    Swal.fire("Debes ingresar un nombre para tu mascota 😊");
    return false;
  }
  return true;
}

function seleccionarMascotaEnemigo() {
  const mascotaAleatoria = aleatorio(1, 3);

  if (mascotaAleatoria === 1) {
    spanMascotaEnemigo.innerHTML = mascotas[mascotaAleatoria];
  } else if (mascotaAleatoria === 2) {
    spanMascotaEnemigo.innerHTML = mascotas[mascotaAleatoria];
  } else {
    spanMascotaEnemigo.innerHTML = mascotas[mascotaAleatoria];
  }
  guardarEstado();
}

//Fin Seleccionar mascotas

//Ataques
function ataqueFuego() {
  ataqueJugador = "🔥";
  ataqueAleatorioEnemigo();
  guardarEstado();
  ataqueSeleccionado.style.display = "block";
}

function ataqueAgua() {
  ataqueJugador = "💧";
  ataqueAleatorioEnemigo();
  guardarEstado();
  ataqueSeleccionado.style.display = "block";
}

function ataqueTierra() {
  ataqueJugador = "🌱";
  ataqueAleatorioEnemigo();
  guardarEstado();
  ataqueSeleccionado.style.display = "block";
}

function ataqueAleatorioEnemigo() {
  const ataqueAleatorio = aleatorio(1, 3);
  if (ataqueAleatorio === 1) {
    ataqueEnemigo = "🔥";
  } else if (ataqueAleatorio === 2) {
    ataqueEnemigo = "💧";
  } else {
    ataqueEnemigo = "🌱";
  }

  combate();
}

//fin Ataques

//Combate
function combate() {
  if (ataqueJugador === ataqueEnemigo) {
    crearMensaje("EMPATE");
  } else if (ataqueJugador === "FUEGO 🔥" && ataqueEnemigo === "TIERRA 🌱") {
    crearMensaje("¡GANASTE! 😁");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = "❤️" + vidasEnemigo;
  } else if (ataqueJugador === "AGUA 💧" && ataqueEnemigo === "FUEGO 🔥") {
    crearMensaje("¡GANASTE! 😁");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = "❤️" + vidasEnemigo;
  } else if (ataqueJugador === "TIERRA 🌱" && ataqueEnemigo === "AGUA 💧") {
    crearMensaje("¡GANASTE! 😁");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = "❤️" + vidasEnemigo;
  } else {
    crearMensaje("PERDISTE 😒");
    vidasJugador--;
    spanVidasJugador.innerHTML = "❤️" + vidasJugador;
  }

  revisarVidas();
  guardarEstado();
}

function revisarVidas() {
  if (vidasJugador == 0) {
    crearMensajeFinal(`Lo siento, ${nombreMascota}  perdiste😕`);
    Swal.fire("Game Over");
  } else if (vidasEnemigo == 0) {
    crearMensajeFinal(`FELICITACIONES! ${nombreMascota} ganaste 😁`);
  }
}

//Fin combate

//Resultados (Mensajes)

function crearMensaje(resultado) {
  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelEnemigo = document.createElement("p");

  sectionMensajes.innerHTML = resultado;
  nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
  nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;

  if (ataquesDelJugador.firstChild && ataquesDelEnemigo.firstChild) {
    ataquesDelJugador.replaceChild(
      nuevoAtaqueDelJugador,
      ataquesDelJugador.firstChild
    ) &&
      ataquesDelEnemigo.replaceChild(
        nuevoAtaqueDelEnemigo,
        ataquesDelEnemigo.firstChild
      );
  } else {
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
  }
}

function crearMensajeFinal(resultadoFinal) {
  sectionMensajes.innerHTML = resultadoFinal;

  botonFuego.disabled = true;
  botonAgua.disabled = true;
  botonTierra.disabled = true;

  botonReiniciar.style.display = "block";
  // Evento para reiniciar el juego
  botonReiniciar.addEventListener("click", reiniciarJuego);
}

//Fin Resultados (Mensajes)

function guardarEstado() {
  localStorage.setItem("nombreMascotaJugador", nombreMascota);
  localStorage.setItem("nombreMascotaEnemigo", spanMascotaEnemigo.innerText);
  localStorage.setItem("vidasJugador", vidasJugador);
  localStorage.setItem("vidasEnemigo", vidasEnemigo);
  localStorage.setItem("ataqueJugador", ataqueJugador);
  localStorage.setItem("ataqueEnemigo", ataqueEnemigo);
  localStorage.setItem("resultado", sectionMensajes.innerHTML);
  localStorage.setItem("ataqueSeleccionado", ataqueSeleccionado.style.display);
}

function restaurarEstado() {
  const nombreMascotaGuardado = localStorage.getItem("nombreMascotaJugador");
  if (nombreMascotaGuardado) {
    spanMascotaJugador.innerHTML = nombreMascotaGuardado;
  }

  const nombreMascotaEnemigoGuardado = localStorage.getItem(
    "nombreMascotaEnemigo"
  );
  if (nombreMascotaEnemigoGuardado) {
    spanMascotaEnemigo.innerHTML = nombreMascotaEnemigoGuardado;
  }

  const vidasJugadorGuardadas = localStorage.getItem("vidasJugador");
  if (vidasJugadorGuardadas) {
    vidasJugador = parseInt(vidasJugadorGuardadas);
    spanVidasJugador.innerHTML = "❤️" + vidasJugador;
  }

  const vidasEnemigoGuardadas = localStorage.getItem("vidasEnemigo");
  if (vidasEnemigoGuardadas) {
    vidasEnemigo = parseInt(vidasEnemigoGuardadas);
    spanVidasEnemigo.innerHTML = "❤️" + vidasEnemigo;
  }

  const ataqueJugadorGuardado = localStorage.getItem("ataqueJugador");
  if (ataqueJugadorGuardado) {
    ataqueJugador = ataqueJugadorGuardado;
    let nuevoAtaqueDelJugador = document.createElement("p");
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
  }

  const ataqueEnemigoGuardado = localStorage.getItem("ataqueEnemigo");
  if (ataqueEnemigoGuardado) {
    ataqueEnemigo = ataqueEnemigoGuardado;
    let nuevoAtaqueDelEnemigo = document.createElement("p");
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
  } else {
    ataquesDelEnemigo.style.display = "none";
  }

  const resultadoGuardado = localStorage.getItem("resultado");
  if (resultadoGuardado) {
    sectionMensajes.innerHTML = resultadoGuardado;
  }

  const ataqueSeleccionadoGuardado = localStorage.getItem("ataqueSeleccionado");
  if (ataqueSeleccionadoGuardado) {
    ataqueSeleccionado.style.display = ataqueSeleccionadoGuardado;
  }
}

// Iniciar el juego cuando la ventana se carga
window.addEventListener("load", iniciarJuego);
