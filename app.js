const campoTexto = document.getElementById('campoTexto');
const btnAgregar = document.getElementById('btnAgregar');
const barraProgresion = document.getElementById('barraProgresion');
const tareas = [];

btnAgregar.addEventListener("click", () => {
    if (campoTexto.value.trim().length !== 0) {
        let tarea = new Tarea(campoTexto.value);
        crearBarra();
        tarea.mostrarTarea();
        tarea.eliminarTarea(barraProgresion, despintarUltimaBarraPintada);
        tarea.editarTarea();
        tarea.verificarCompletado(despintarUltimaBarraPintada);
        tareas.push(tarea.div);

        campoTexto.value = '';
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