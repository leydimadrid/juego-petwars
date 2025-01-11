export function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function reiniciarJuego() {
  mostrarSeccion("seleccionar-mascota");
  localStorage.removeItem("mostrarSeccion");
}

export function mostrarSeccion(seccion) {
  const secciones = document.querySelectorAll(".seccion");
  secciones.forEach((sec) => {
    if (sec.id === seccion) {
      sec.style.display = "flex";
      sec.style.flexDirection = "column";
    } else {
      sec.style.display = "none";
    }

    guardarSeccion(seccion);
  });
}

function guardarSeccion(seccion) {
  localStorage.setItem("mostrarSeccion", seccion);
}

export function obtenerSeccion() {
  return localStorage.getItem("mostrarSeccion");
}

export function restaurarSeccion() {
  const seccion = obtenerSeccion();
  if (seccion) {
    mostrarSeccion(seccion);
  }else {
    mostrarSeccion("seleccionar-mascota");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  restaurarSeccion();
});
