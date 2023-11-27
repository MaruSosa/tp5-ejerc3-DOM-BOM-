let contadorTareas = 1;

const btnGuardar = document.getElementById("btnGuardar");
btnGuardar.addEventListener("click", guardarTarea);

function guardarTarea() {
    const tareaNueva = document.getElementById("TareaNueva").value;
    const listado = document.getElementById("listado");
    
    if (tareaNueva !== '') {
        let existe = false;

        listado.querySelectorAll('tbody tr').forEach((fila) => {
            const textoTarea = fila.querySelector('td:nth-child(2)').textContent.trim();

            if (textoTarea === tareaNueva.trim()) {
                existe = true;
            }
        });

        if (existe) {
            alert("La tarea ya existe en el listado.");
        } else {
            const nuevaFila = document.createElement('tr');
            const tdNumeroTarea = document.createElement('td');
            tdNumeroTarea.textContent = contadorTareas;
            const tdTarea = document.createElement('td');
            tdTarea.textContent = tareaNueva;
            const tdAccionesBotones = document.createElement('td');
            const btnEditar = document.createElement('button');
            btnEditar.textContent = 'Editar';
            const btnEliminar = document.createElement('button');
            btnEliminar.textContent = 'Eliminar';
            tdAccionesBotones.appendChild(btnEditar);
            tdAccionesBotones.appendChild(btnEliminar);
            nuevaFila.appendChild(tdNumeroTarea);
            nuevaFila.appendChild(tdTarea);
            nuevaFila.appendChild(tdAccionesBotones);
            listado.querySelector('tbody').appendChild(nuevaFila);
            contadorTareas++; 
        }
    }else{
        alert("Ingrese una Tarea");
    }
}
