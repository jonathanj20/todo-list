class Tarea {
    constructor(texto) {
        this.texto = texto;
        this.div = document.createElement('div');
        this.textoSpan = document.createElement('span');
        this.listaTareas = document.getElementById('listaTareas');
        this.btnEliminar = document.createElement('button');
        this.btnEditar = document.createElement('button');
        this.contenedorTareaTexto = document.createElement('div');
        this.contenedorBotones = document.createElement('div');
        this.checkbox = document.createElement('input');
        this.esEditable = false;
        this.primerElementoEncontrado = false;
    }

    mostrarTarea() {
        this.textoSpan.innerHTML = this.texto;
        this.btnEliminar.innerHTML = 'Eliminar';
        this.btnEditar.innerHTML = 'Editar';

        this.contenedorTareaTexto.appendChild(this.textoSpan);
        this.contenedorBotones.appendChild(this.btnEliminar);
        this.contenedorBotones.appendChild(this.btnEditar);
        this.div.appendChild(this.checkbox);
        this.div.appendChild(this.contenedorTareaTexto);
        this.div.appendChild(this.contenedorBotones);
        this.listaTareas.appendChild(this.div);

        this.contenedorTareaTexto.setAttribute('class', 'contenedorTarea');
        this.contenedorBotones.setAttribute('class', 'contenedorBotones');
        this.div.setAttribute('class', 'contenedorTareaGeneral');
        this.btnEliminar.setAttribute('class', 'btnEliminar');
        this.btnEditar.setAttribute('class', 'btnEditar');
        this.checkbox.setAttribute('type', 'checkbox');
    }

    verificarCompletado(barraProgresion) {
        /**Cuando se marca completado una tarea se crea una barra, y cuando
         * se quita como completado cualquier tarea se quita una barra. 
         * Ya sea para ponerle un color a la barra cuando se marque como
         * completado una tarea o para eliminar una barra cuando se quite
         * como marcada, se usará el último hijo del elemento barraProgresion
         * porque accedemos a su último hijo con la propiedad 'lastChild'.
        */
        this.checkbox.addEventListener('change', () => {
            if (this.checkbox.checked) {
                this.textoSpan.style.textDecoration = 'line-through';

                const barra = document.createElement('div');
                barraProgresion.appendChild(barra);
                barra.setAttribute('class', 'barra');
                barraProgresion.lastChild.style.backgroundColor = '#93d3fa';
            } else {
                this.textoSpan.style.textDecoration = '';
                barraProgresion.removeChild(barraProgresion.lastChild);
            }
        });
    }

    eliminarTarea(barraProgresion) {
        this.btnEliminar.addEventListener("click", () => {
            /*la función removeChild, elimina un nodo hijo, y puede
            recibir como parámetro un elemento HTML o un id*/
            this.listaTareas.removeChild(this.div);

            if (this.checkbox.checked) {
                barraProgresion.removeChild(barraProgresion.lastChild);
            }
        });
    }

    editarTarea() {
        this.btnEditar.addEventListener("click", () => {
            this.esEditable = !this.esEditable;
            this.textoSpan.contentEditable = this.esEditable;
        });
    }
}