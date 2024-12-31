import { aleatorio, mostrarSeccion } from "./utils.js";

const inputMascota = document.getElementById("nombre-mascota");
const inputGatico = document.getElementById("gatico");
const inputPerrito = document.getElementById("perrito");
const inputPinguino = document.getElementById("pinguino");
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
  manchas: "Manchas 🐧",
};

export function seleccionarMascotaJugador() {
  if (!validarNombre()) {
    return;
  }
  if (inputGatico.checked) {
    spanMascotaJugador.innerText = nombreMascota + " 😽";
  } else if (inputPerrito.checked) {
    spanMascotaJugador.innerText = nombreMascota + " 🐶 ";
  } else if (inputPinguino.checked) {
    spanMascotaJugador.innerText = nombreMascota + " 🐧 ";
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

export function validarNombre() {
  if (!nombreMascota) {
    Swal.fire("Debes ingresar un nombre para tu mascota 😊");
    return false;
  }
  return true;
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
