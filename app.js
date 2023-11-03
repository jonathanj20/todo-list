const campoTexto = document.getElementById('campoTexto');
const btnAgregar = document.getElementById('btnAgregar');
const listaTareas = document.getElementById('listaTareas');
const barraProgresion = document.getElementById('barraProgresion');
let barras = [];
let primerElementoEncontrado = false, esEditable = false;

btnAgregar.addEventListener("click", () => {
    agregarTarea();
});

function agregarTarea(){
    if(campoTexto.value.trim().length !== 0) {
        //creación de elementos HTML
        //este div, es el que contiene toda la tarea, incluyendo los botones
        const div = document.createElement('div');
        const textoSpan = document.createElement('span');
        const btnEliminar = document.createElement('button');
        const btnEditar = document.createElement('button');
        const contenedorTareaTexto = document.createElement('div');
        const contenedorBotones = document.createElement('div');
        const checkbox = document.createElement('input');
        const barra = document.createElement('div');
        barras.push(barra);

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
        contenedorTareaTexto.appendChild(textoSpan);
        contenedorBotones.appendChild(btnEliminar);
        contenedorBotones.appendChild(btnEditar);
        div.appendChild(checkbox);
        div.appendChild(contenedorTareaTexto);
        div.appendChild(contenedorBotones);
        listaTareas.appendChild(div);
        barraProgresion.appendChild(barra);

        //asginación de atributos
        contenedorTareaTexto.setAttribute('class','contenedorTarea');
        contenedorBotones.setAttribute('class','contenedorBotones');
        div.setAttribute('class','contenedorTareaGeneral');
        btnEliminar.setAttribute('class', 'btnEliminar');
        btnEditar.setAttribute('class', 'btnEditar');   
        checkbox.setAttribute('type','checkbox');     
        barra.setAttribute('class','barra');
       
        //el evento change sirve para detectar un cambio en el checkbox
        checkbox.addEventListener('change', () => {
            if(checkbox.checked){
                textoSpan.style.textDecoration = 'line-through';
                barras.forEach((elemento) => {
                    if(elemento.style.backgroundColor === '' && !primerElementoEncontrado){
                        elemento.style.backgroundColor = '#93d3fa';
                        primerElementoEncontrado = true;
                    }
                });
                primerElementoEncontrado = false;
            } else{
                /**este contador representa el índice del array de la barra*/
                let contador = -1;
                textoSpan.style.textDecoration = 'none';
                barras.forEach((elemento) => {
                    if(elemento.style.backgroundColor != ''){
                        contador++;
                    }
                });
                barras[contador].style.backgroundColor = '';
                contador = -1;
            }
        });

        campoTexto.value = '';
    } 
}

/*la función removeChild, eliminar un nodo hijo, y puede
recibir como parámetro un elemento HTML o un id*/
const eliminarTarea = (tarea) => listaTareas.removeChild(tarea);

function editarTarea(tarea){
    esEditable = !esEditable;
    tarea.contentEditable = esEditable;
}


