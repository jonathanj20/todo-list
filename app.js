const campoTexto = document.getElementById('campoTexto');
const btnAgregar = document.getElementById('btnAgregar');
const listaTareas = document.getElementById('listaTareas');

btnAgregar.addEventListener("click", () => {
    agregarTarea();
});

function agregarTarea(){
    if(campoTexto.value.trim().length !== 0) {
        //creación de elementos HTML
        const div = document.createElement('div');
        const textoSpan = document.createElement('span');
        const btnEliminar = document.createElement('button');
        const btnEditar = document.createElement('button');

        /*Al momento de crear los botones, se les asigna el evento click.
        De esta forma, cada botón creado tendrá su propio evento, y sabrá
        a qué tarea eliminar o editar.*/ 
        btnEliminar.addEventListener("click", () => {
            eliminarTarea(div);
        });

        btnEditar.addEventListener("click", () => {
            editarTarea(textoSpan);
        });

        //Asignación de textos al span y al boton
        textoSpan.innerHTML = campoTexto.value;
        btnEliminar.innerHTML = 'Eliminar';
        btnEditar.innerHTML = 'Editar';

        /*se les añade como hijo el parrafo y el boton al div creado.
        Y el div se le asigna al contenedor listaTareas*/
        div.appendChild(textoSpan);
        div.appendChild(btnEliminar);
        div.appendChild(btnEditar)
        listaTareas.appendChild(div);

        campoTexto.value = '';
    } 
}

function eliminarTarea(tarea){
    /*la función removeChild, eliminar un nodo hijo, y puede
    recibir como parámetro un elemento HTML o un id*/
    listaTareas.removeChild(tarea);
}

function editarTarea(tarea){
    tarea.contentEditable = 'true';
}
