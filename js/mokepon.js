/*CreateElement es para crear un elemento HTML dentro de JAVASCRIPT */
/*InnerHTML es para modificar un elemento de HTML en JAVASCRIPT */
/*appendChild permite utilizar elementos creados en JAVASCRIPT y insertarlos en HTML */
/*disabled es para desactivar botones */
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
const sectionReiniciar = document.getElementById("reiniciar");
const botonMascotaJugador = document.getElementById("boton-mascota");
const botonFuego = document.getElementById("boton-fuego");
const botonAgua = document.getElementById("boton-agua");
const botonTierra = document.getElementById("boton-tierra");
const botonReiniciar = document.getElementById("boton-reiniciar");

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");
const inputMichu = document.getElementById("michu");
const inputFirulais = document.getElementById("firulais");
const inputManchas = document.getElementById("manchas");
const spanMascotaJugador = document.getElementById("mascota-jugador");

const spanMascotaEnemigo = document.getElementById("mascota-enemigo");

const spanVidasJugador = document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo");

const sectionMensajes = document.getElementById("resultado");
const ataquesDelJugador = document.getElementById("ataques-del-jugador");
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo");

let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
  sectionSeleccionarAtaque.style.display = "none";
  sectionReiniciar.style.display = "none";

  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
  botonFuego.addEventListener("click", ataqueFuego);
  botonAgua.addEventListener("click", ataqueAgua);
  botonTierra.addEventListener("click", ataqueTierra);

  botonReiniciar.addEventListener("click", reiniciarJuego);
}

function seleccionarMascotaJugador() {
  sectionSeleccionarMascota.style.display = "none";
  sectionSeleccionarAtaque.style.display = "flex";

  if (inputMichu.checked) {
    spanMascotaJugador.innerHTML = "Michu 🐈‍⬛";
  } else if (inputFirulais.checked) {
    spanMascotaJugador.innerHTML = "Firulais 🐶";
  } else if (inputManchas.checked) {
    spanMascotaJugador.innerHTML = "Manchas 🐮";
  } else {
    alert("Debes seleccionar una mascota 😊");
    sectionSeleccionarMascota.style.display = "block";
    sectionSeleccionarAtaque.style.display = "none";
  }

  seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
  let mascotaAletoria = aleatorio(1, 3);

  if (mascotaAletoria == 1) {
    spanMascotaEnemigo.innerHTML = "Michu 🐈‍⬛";
  } else if (mascotaAletoria == 2) {
    spanMascotaEnemigo.innerHTML = "Firulais 🐶";
  } else {
    spanMascotaEnemigo.innerHTML = "Manchas 🐮";
  }
}

function ataqueFuego() {
  ataqueJugador = "FUEGO 🔥";
  ataqueAleatorioEnemigo();
}

function ataqueAgua() {
  ataqueJugador = "AGUA 💧";
  ataqueAleatorioEnemigo();
}

function ataqueTierra() {
  ataqueJugador = "TIERRA 🌱";
  ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
  ataqueAleatorio = aleatorio(1, 3);
  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "FUEGO 🔥";
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "AGUA 💧";
  } else {
    ataqueEnemigo = "TIERRA 🌱";
  }

  combate();
}

function combate() {
  if (ataqueJugador == ataqueEnemigo) {
    crearMensaje("EMPATE");
  } else if (ataqueJugador == "FUEGO 🔥" && ataqueEnemigo == "TIERRA 🌱") {
    crearMensaje("¡GANASTE! 😁");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "AGUA 💧" && ataqueEnemigo == "FUEGO 🔥") {
    crearMensaje("¡GANASTE! 😁");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "TIERRA 🌱" && ataqueEnemigo == "AGUA 💧") {
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

function revisarVidas() {
  if (vidasJugador == 0) {
    crearMensajeFinal("Lo siento, perdiste😕");
  } else if (vidasEnemigo == 0) {
    crearMensajeFinal("FELICITACIONES! ganaste 😁");
  }
}

function crearMensaje(resultado) {
  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelEnemigo = document.createElement("p");

  sectionMensajes.innerHTML = resultado;
  nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
  nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;

  ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
  sectionMensajes.innerHTML = resultadoFinal;

  botonFuego.disabled = true;
  botonAgua.disabled = true;
  botonTierra.disabled = true;

  sectionReiniciar.style.display = "block";
}

function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
