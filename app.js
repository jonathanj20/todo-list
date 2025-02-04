const campoTexto = document.getElementById('campoTexto');
const btnAgregar = document.getElementById('btnAgregar');
const barraProgresion = document.getElementById('barraProgresion');
const porcentajeCompletado = document.getElementById('porcentajeCompletado');
let tareasTotales = 0, tareasCompletadas = 0;

btnAgregar.addEventListener("click", () => {
    if (campoTexto.value.trim().length !== 0) {
        let tarea = new Tarea(campoTexto.value);
        crearBarra();
        tarea.mostrarTarea();
        tarea.eliminarTarea();
        tarea.editarTarea();
        tarea.verificarCompletado();

        tareasTotales++;
        campoTexto.value = '';

        establecerPorcentaje();
    }
});

const crearBarra = () => {
    const barra = document.createElement("div");
    barra.setAttribute("class", "barraCreada");
    barraProgresion.appendChild(barra);
}

const despintarUltimaBarraPintada = () => {
    const barrasCreadas = document.querySelectorAll(".barraCreada");
    const barrasPintadas = Array.from(barrasCreadas).filter(barra => barra.classList.contains("barraPintada"));
    barrasPintadas[barrasPintadas.length - 1].classList.remove("barraPintada");
}

const calcularTareasCompletadas = (tareasTotales, tareasCompletadas) => (tareasCompletadas * 100) / tareasTotales;
const establecerPorcentaje = () => porcentajeCompletado.innerHTML = calcularTareasCompletadas(tareasTotales, tareasCompletadas) > 0 ? `${calcularTareasCompletadas(tareasTotales, tareasCompletadas)}%` : "0%";

establecerPorcentaje();
