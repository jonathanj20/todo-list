const campoTexto = document.getElementById('campoTexto');
const btnAgregar = document.getElementById('btnAgregar');
const barraProgresion = document.getElementById('barraProgresion');

btnAgregar.addEventListener("click", () => {
    if (campoTexto.value.trim().length !== 0) {
        let tarea = new Tarea(campoTexto.value);
        tarea.mostrarTarea();
        tarea.eliminarTarea(barraProgresion);
        tarea.editarTarea();
        tarea.verificarCompletado(barraProgresion);

        campoTexto.value = '';
    }
});

