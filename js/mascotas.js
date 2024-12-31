import { aleatorio, mostrarSeccion } from "./utils.js";

const inputMascota = document.getElementById("nombre-mascota");
const inputMichu = document.getElementById("michu");
const inputFirulais = document.getElementById("firulais");
const inputManchas = document.getElementById("manchas");
const spanMascotaJugador = document.getElementById("mascota-jugador");

const spanMascotaEnemigo = document.getElementById("mascota-enemigo");

let nombreMascota = inputMascota.value;

inputMascota.addEventListener("input", (e) => {
  nombreMascota = e.target.value;
  spanMascotaJugador.textContent = nombreMascota;
});

const mascotas = {
  michu: "Michu 🐈‍⬛",
  firulais: "Firulais 🐶",
  manchas: "Manchas 🐮",
};

export function seleccionarMascotaJugador() {
  if (inputMichu.checked) {
    spanMascotaJugador.innerText = nombreMascota;
  } else if (inputFirulais.checked) {
    spanMascotaJugador.innerText = nombreMascota;
  } else if (inputManchas.checked) {
    spanMascotaJugador.innerText = nombreMascota;
  } else {
    Swal.fire("Debes seleccionar una mascota 😊");
    return;
  }

  seleccionarMascotaEnemigo();
  mostrarSeccion("seleccionar-ataque");
}

export function seleccionarMascotaEnemigo() {
  const mascotaAleatoria = aleatorio(1, 3);

  if (mascotaAleatoria === 1) {
    spanMascotaEnemigo.innerHTML = mascotas.michu;
  } else if (mascotaAleatoria === 2) {
    spanMascotaEnemigo.innerHTML = mascotas.firulais;
  } else {
    spanMascotaEnemigo.innerHTML = mascotas.manchas;
  }
}
