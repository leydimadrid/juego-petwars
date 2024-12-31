import { seleccionarMascotaJugador } from "./mascotas.js";
import { reiniciarJuego, mostrarSeccion } from "./utils.js";
import { ataqueFuego, ataqueAgua, ataqueTierra } from "./ataques.js";

const botonMascotaJugador = document.getElementById("boton-mascota");
const botonFuego = document.getElementById("boton-fuego");
const botonAgua = document.getElementById("boton-agua");
const botonTierra = document.getElementById("boton-tierra");

function iniciarJuego() {
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
  botonFuego.addEventListener("click", ataqueFuego);
  botonAgua.addEventListener("click", ataqueAgua);
  botonTierra.addEventListener("click", ataqueTierra);
}

// Iniciar el juego cuando la ventana se carga
window.addEventListener("load", iniciarJuego);
