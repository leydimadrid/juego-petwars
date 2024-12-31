import { seleccionarMascotaJugador } from "./mascotas.js";
import { reiniciarJuego, mostrarSeccion, restaurarSeccion } from "./utils.js";
import { ataqueFuego, ataqueAgua, ataqueTierra } from "./ataques.js";

const botonMascotaJugador = document.getElementById("boton-mascota");
const botonFuego = document.getElementById("boton-fuego");
const botonAgua = document.getElementById("boton-agua");
const botonTierra = document.getElementById("boton-tierra");
const botonAtras = document.getElementById("boton-atras");

function iniciarJuego() {
  mostrarSeccion("seleccionar-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
  botonFuego.addEventListener("click", ataqueFuego);
  botonAgua.addEventListener("click", ataqueAgua);
  botonTierra.addEventListener("click", ataqueTierra);
}

botonAtras.addEventListener("click", () => {
  mostrarSeccion("seleccionar-mascota");
});

// Iniciar el juego cuando la ventana se carga
window.addEventListener("load", iniciarJuego);
