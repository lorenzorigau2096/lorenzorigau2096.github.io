// Año automático del footer
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// Animación de aparición
const secciones = document.querySelectorAll("section");

secciones.forEach((seccion) => {
    seccion.classList.add("oculto");
});

window.addEventListener("load", () => {
    secciones.forEach((seccion, index) => {
        setTimeout(() => {
            seccion.classList.add("visible");
        }, index * 250);
    });
});
console.log("JavaScript funcionando");

alert("JavaScript conectado");
const botonModo = document.getElementById("modoOscuro");

botonModo.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});