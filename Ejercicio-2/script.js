const btn = document.getElementById('btn-agregar');
const marca = document.getElementById('marca');
const modelo = document.getElementById('modelo');
const anio = document.getElementById('anio');
const color = document.getElementById('color');
const tabla = document.querySelector('#tabla-autos tbody');
const mensajeError = document.getElementById('mensaje-error');

btn.addEventListener('click', () => {
    // obtengo los valores de los input
    const marcaVal = marca.value.trim();
    const modeloVal = modelo.value.trim();
    const anioVal = anio.value;
    const colorVal = color.value;

    // validaciones
    if (marcaVal === '' || modeloVal === '' || anioVal === '' || colorVal === '' || parseInt(anioVal) < 1886) {
        mensajeError.style.color = 'red';
        mensajeError.style.display = 'block';
        return;
    }

    mensajeError.style.display = 'none';

    // creo la fila y sus celdas
    const nuevaFila = document.createElement('tr');
    const celdaMarca = document.createElement("td");
    const celdaModelo = document.createElement("td");
    const celdaAnio = document.createElement("td");
    const celdaColor = document.createElement("td");
    const backgroundColor = colorVal.toLowerCase();

    // asigno valor a las celdas
    celdaMarca.textContent = marcaVal;
    celdaModelo.textContent = modeloVal;
    celdaAnio.textContent = anioVal;
    celdaColor.textContent = colorVal;
    celdaColor.classList.add('celda-color'); // Agrega clase para selección

    // agrego celdas a la fila
    nuevaFila.appendChild(celdaMarca);
    nuevaFila.appendChild(celdaModelo);
    nuevaFila.appendChild(celdaAnio);
    nuevaFila.appendChild(celdaColor);

    // cambio color de celda al pasar el mouse
    celdaColor.addEventListener('mouseover', () => {
        celdaColor.style.backgroundColor = backgroundColor;
        celdaColor.style.color = 'white';
    });

    celdaColor.addEventListener('mouseout', () => {
        celdaColor.style.backgroundColor = '';
        celdaColor.style.color = '';
    });

    // LOGICA ADICIONAL BOTON DE ELIMINAR
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    const celdaBoton = document.createElement("td");
    celdaBoton.appendChild(btnEliminar);
    nuevaFila.appendChild(celdaBoton);

    btnEliminar.addEventListener("click", function () {
        tabla.removeChild(nuevaFila);
    });

    // agrego la fila a la tabla
    tabla.appendChild(nuevaFila);

    // limpio el formulario
    marca.value = '';
    modelo.value = '';
    anio.value = '';
    color.value = '';
});

