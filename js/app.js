let contadorTareas = 1;

const btnGuardar = document.getElementById("btnGuardar");
btnGuardar.addEventListener("click", guardarTarea);

function guardarTarea() {
  const tareaNueva = document.getElementById("TareaNueva").value;
  const listado = document.getElementById("listado");

  if (tareaNueva !== "") {
    let existe = false;

    listado.querySelectorAll("tbody tr").forEach((fila) => {
      const textoTarea = fila
        .querySelector("td:nth-child(2)")
        .textContent.trim();

      if (textoTarea === tareaNueva.trim()) {
        existe = true;
      }
    });

    if (existe) {
      alert("La tarea ya existe en el listado.");
    } else {
      const nuevaFila = document.createElement("tr");
      const tdNumeroTarea = document.createElement("td");
      tdNumeroTarea.textContent = contadorTareas;
      const tdTarea = document.createElement("td");
      tdTarea.textContent = tareaNueva;
      const tdAccionesBotones = document.createElement("td");

      const btnEditar = document.createElement('button');
      btnEditar.className = 'btn btn-editar m-3';
      btnEditar.textContent = 'Editar';
      btnEditar.addEventListener('click', () => {
        const fila = btnEditar.parentElement.parentElement;
        const tdTarea = fila.querySelector('td:nth-child(2)');
        const textoTarea = tdTarea.textContent;
        const inputEdicion = document.createElement('input');
        inputEdicion.value = textoTarea; 
        inputEdicion.classList.add('form-control'); 
        tdTarea.textContent = '';
        tdTarea.appendChild(inputEdicion);
        inputEdicion.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                tdTarea.textContent = inputEdicion.value; 
            }
        });
      });

      const btnEliminar = document.createElement("button");
      btnEliminar.className = 'btn btn-eliminar m-3';
      btnEliminar.textContent = "Eliminar";
      btnEliminar.addEventListener("click", function() {
        this.parentElement.parentElement.remove();
        contadorTareas--;
      });

      tdAccionesBotones.appendChild(btnEditar);
      tdAccionesBotones.appendChild(btnEliminar);
      nuevaFila.appendChild(tdNumeroTarea);
      nuevaFila.appendChild(tdTarea);
      nuevaFila.appendChild(tdAccionesBotones);
      listado.querySelector("tbody").appendChild(nuevaFila);
      contadorTareas++;
      document.getElementById("TareaNueva").value = "";
    }
  } else {
    alert("Ingrese una Tarea");
  }
}
