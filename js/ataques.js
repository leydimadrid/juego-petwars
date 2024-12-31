import { aleatorio, reiniciarJuego } from "./utils.js";
import { combate } from "./combate.js";

const sectionMensajes = document.getElementById("resultado");
const ataquesDelJugador = document.getElementById("ataques-del-jugador");
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo");
const sectionReiniciar = document.getElementById("reiniciar");
const botonReiniciar = document.getElementById("boton-reiniciar");

const botonFuego = document.getElementById("boton-fuego");
const botonAgua = document.getElementById("boton-agua");
const botonTierra = document.getElementById("boton-tierra");

let ataqueJugador;
let ataqueEnemigo;

export function ataqueFuego() {
  ataqueJugador = "FUEGO 🔥";
  ataqueAleatorioEnemigo();
}

export function ataqueAgua() {
  ataqueJugador = "AGUA 💧";
  ataqueAleatorioEnemigo();
}

export function ataqueTierra() {
  ataqueJugador = "TIERRA 🌱";
  ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
  const ataqueAleatorio = aleatorio(1, 3);
  if (ataqueAleatorio === 1) {
    ataqueEnemigo = "FUEGO 🔥";
  } else if (ataqueAleatorio === 2) {
    ataqueEnemigo = "AGUA 💧";
  } else {
    ataqueEnemigo = "TIERRA 🌱";
  }

  combate(ataqueJugador, ataqueEnemigo);
}

export function crearMensaje(resultado) {
  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelEnemigo = document.createElement("p");

  sectionMensajes.innerHTML = resultado;
  nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
  nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;

  ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

export function crearMensajeFinal(resultadoFinal) {
  sectionMensajes.innerHTML = resultadoFinal;

  botonFuego.disabled = true;
  botonAgua.disabled = true;
  botonTierra.disabled = true;

  botonReiniciar.style.display = "block";
  // Evento para reiniciar el juego
  botonReiniciar.addEventListener("click", reiniciarJuego);
}
