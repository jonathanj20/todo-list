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

    verificarCompletado() {
        this.checkbox.addEventListener('change', () => {
            const barrasCreadas = document.querySelectorAll(".barraCreada");

            if (this.checkbox.checked) {
                this.textoSpan.style.textDecoration = 'line-through';

                const primeraBarraNoPintada = Array.from(barrasCreadas).find(barra => !barra.classList.contains("barraPintada"));
                primeraBarraNoPintada.classList.add("barraPintada");
                tareasCompletadas++;
            } else {
                this.textoSpan.style.textDecoration = '';
                despintarUltimaBarraPintada();
                tareasCompletadas--;
            }

            establecerPorcentaje();
        });
    }

    eliminarTarea() {
        this.btnEliminar.addEventListener("click", () => {
            /*la función removeChild, elimina un nodo hijo, y puede
            recibir como parámetro un elemento HTML o un id*/

            if (this.checkbox.checked) {
                despintarUltimaBarraPintada();
                tareasCompletadas--;
            }

            tareasTotales--;
            this.listaTareas.removeChild(this.div);
            barraProgresion.removeChild(barraProgresion.lastChild);
            establecerPorcentaje();
        });
    }

    editarTarea() {
        this.btnEditar.addEventListener("click", () => {
            this.esEditable = !this.esEditable;
            this.textoSpan.contentEditable = this.esEditable;
        });
    }
}