import { crearMensaje, crearMensajeFinal } from "./ataques.js";

const spanVidasJugador = document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo");

let vidasJugador = 3;
let vidasEnemigo = 3;

export function combate(ataqueJugador, ataqueEnemigo) {
  if (ataqueJugador === ataqueEnemigo) {
    crearMensaje("EMPATE");
  } else if (ataqueJugador === "FUEGO 🔥" && ataqueEnemigo === "TIERRA 🌱") {
    crearMensaje("¡GANASTE! 😁");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador === "AGUA 💧" && ataqueEnemigo === "FUEGO 🔥") {
    crearMensaje("¡GANASTE! 😁");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador === "TIERRA 🌱" && ataqueEnemigo === "AGUA 💧") {
    crearMensaje("¡GANASTE! 😁");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else {
    crearMensaje("PERDISTE 😒");
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
  }

  revisarVidas();
}

export function revisarVidas() {
  if (vidasJugador == 0) {
    crearMensajeFinal("Lo siento, perdiste😕");
  } else if (vidasEnemigo == 0) {
    crearMensajeFinal("FELICITACIONES! ganaste 😁");
  }
}
