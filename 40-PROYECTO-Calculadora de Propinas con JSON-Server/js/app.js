let cliente = {
    mesa: '',
    hora: '',
    pedido:[]
};

const categorias = {
    1:'Comida',
    2:'Bebidas',
    3:'Postres'
}

const btnGuardarCliente = document.querySelector('#guardar-cliente');
btnGuardarCliente.addEventListener('click', guardarCliente);

function guardarCliente() {
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    // Revisar si hay campos vacíos
    const camposVacios = [ mesa, hora ].some(campo => campo === '' );

    if (camposVacios){

        // Verificar si ya hay una alerta
        const existeAlerta = document.querySelector('.invalid-feedback');

        if (!existeAlerta) {
            const alerta = document.createElement('DIV');
            alerta.classList.add('invalid-feedback','d-block','text-center');
            alerta.textContent = 'Todos los campos son obligatorios';

            document.querySelector('.modal-body form').appendChild(alerta);

            setTimeout(() => {
                alerta.remove();
            }, 3000);
        }

        return;
    }

    // Asignar datos del formulario a cliente
    cliente = { ...cliente, mesa, hora}

    // Ocultar modal
    const modalFormulario = document.querySelector('#formulario');
    const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
    modalBootstrap.hide();

    // Mostrar las secciones
    mostrarSecciones();

    // Obtener platillos de la API
    obtenerPlatillos();
}


function mostrarSecciones() {
    const seccionesOcultas = document.querySelectorAll('.d-none');
    seccionesOcultas.forEach(seccion => seccion.classList.remove('d-none'));

}

function obtenerPlatillos() {
    const url = "http://localhost:4000/platillos";

    fetch(url)
        .then( respuesta => respuesta.json())
        .then( resultado => mostrarPlatillos(resultado))

}

function mostrarPlatillos(platillos) {
    
    const contenido = document.querySelector('#platillos .contenido');

    platillos.forEach( platillo => {
        const row = document.createElement('div');
        row.classList.add('row','py-3','border-top');

        const nombre = document.createElement('div');
        nombre.classList.add('col-md-4');
        nombre.textContent = platillo.nombre;

        const precio = document.createElement('div');
        precio.classList.add('col-md-3', 'fw-bold');
        precio.textContent = `$ ${platillo.precio}`;

        const categoria = document.createElement('div');
        categoria.classList.add('col-md-3');
        categoria.textContent = categorias[platillo.categoria];

        const inputCantidad = document.createElement('input');
        inputCantidad.type = 'number';
        inputCantidad.min = 0;
        inputCantidad.value = 0;
        inputCantidad.id = `producto-${platillo.id}`;
        inputCantidad.classList.add('form-control');

        // Funcion que detecta la cantidad y el platillo que se está agregando
        inputCantidad.onchange = () => {
            const cantidad = parseInt(inputCantidad.value);

            agregarPlatillo({...platillo, cantidad})
        };

        const agregar = document.createElement('div');
        agregar.classList.add('col-md-2');
        agregar.appendChild(inputCantidad);

        row.appendChild(nombre);
        row.appendChild(precio);
        row.appendChild(categoria);
        row.appendChild(agregar);
        contenido.appendChild(row);

    })

}

function agregarPlatillo(producto) {

    // Extraer el pedido actual
    const { pedido } = cliente;

    //Revisar que la cantidad sea mayor a 0
    if (producto.cantidad > 0) {

        // Comprueba si el elemento ya existe en el array
        if(!pedido.some( articulo => articulo.id === producto.id)) {
            // El artículo no existe, lo agregamos al array
            cliente.pedido = [...pedido, producto];

        } else {
            // El artículo ya existe, actualizamos la cantidad
            const pedidoActualizado = pedido.map( articulo => {
                if (articulo.id === producto.id) {
                    articulo.cantidad = producto.cantidad;
                }
                return articulo
            });
            // Se asigna el nuevo array a cliente.pedido
            cliente.pedido = [...pedidoActualizado];
        }
    } else {
        // Eliminar elementos cuando la cantidad es 0
        if(pedido.some( articulo => articulo.id === producto.id)) {
            // El artículo no existe, lo agregamos al array
            const resultado = pedido.filter( articulo => articulo.id !== producto.id);

            cliente.pedido = [...resultado];
        }
    }

    // Limpiar HTML previo

    limpiarHTML();

    if (cliente.pedido.length) {
        // Mostrar el resumen
        actualizarResumen();
    } else {
        mensajePedidoVacio();
    }

}

function actualizarResumen() {
    
    const contenido = document.querySelector('#resumen .contenido');

    const resumen = document.createElement('DIV');
    resumen.classList.add('col-md-6','card','py-2','px-3','shadow');

    // Información de la mesa

    const mesa = document.createElement('P');
    mesa.textContent = 'Mesa: ';
    mesa.classList.add('fw-bold');

    const mesaSpan = document.createElement('SPAN');
    mesaSpan.textContent = cliente.mesa;
    mesaSpan.classList.add('fw-normal');

    mesa.appendChild(mesaSpan);
    
    // Información de la hora

    const hora = document.createElement('P');
    hora.textContent = 'Hora: ';
    hora.classList.add('fw-bold');

    const horaSpan = document.createElement('SPAN');
    horaSpan.textContent = cliente.hora;
    horaSpan.classList.add('fw-normal');

    hora.appendChild(horaSpan);

    // Título de la sección
    const heading = document.createElement('H3');
    heading.textContent = 'Platillos Consumidos';
    heading.classList.add('my-4','text-center');

    // Iterar sobre el array de pedidos
    const grupo = document.createElement('UL');
    grupo.classList.add('list-group');

    const { pedido } = cliente;
    pedido.forEach( articulo => {
        const { nombre, precio, cantidad, id } = articulo;

        const lista = document.createElement('LI');
        lista.classList.add('list-group-item');

        const nombreElemento = document.createElement('h4');
        nombreElemento.classList.add('my-4');
        nombreElemento.textContent = nombre;

        // Cantidad del artículo
        const cantidadElemento = document.createElement('p');
        cantidadElemento.classList.add('fw-bold');
        cantidadElemento.textContent = 'Cantidad: ';

        const cantidadValor = document.createElement('SPAN');
        cantidadValor.classList.add('fw-normal');
        cantidadValor.textContent = cantidad

        // Agrefar valores a sus contenedores
        cantidadElemento.appendChild(cantidadValor);

        // Precio del artículo
        const precioElemento = document.createElement('p');
        precioElemento.classList.add('fw-bold');
        precioElemento.textContent = `$ ${precio}`;

        const precioValor = document.createElement('SPAN');
        precioValor.classList.add('fw-normal');

        // Agrefar valores a sus contenedores
        precioElemento.appendChild(precioValor);

        // Subtotal del artículo
        const subtotalElemento = document.createElement('p');
        subtotalElemento.classList.add('fw-bold');
        subtotalElemento.textContent = `Subtotal: `;

        const subtotalValor = document.createElement('SPAN');
        subtotalValor.classList.add('fw-normal');
        subtotalValor.textContent = calcularSubtotal(precio, cantidad);
        // Agrefar valores a sus contenedores
        subtotalElemento.appendChild(subtotalValor);

        // Botón para eliminar
        const btnEliminar = document.createElement('button');
        btnEliminar.classList.add('btn','btn-danger');
        btnEliminar.textContent = 'Eliminar'

        // Función para eliminar del pedido
        btnEliminar.onclick = () => eliminarProducto(id);


        // Agregar elementos al Li
        lista.appendChild(nombreElemento);
        lista.appendChild(cantidadElemento);
        lista.appendChild(precioElemento);
        lista.appendChild(subtotalElemento);
        lista.appendChild(btnEliminar)

        // Agregar lista al grupo principal
        grupo.appendChild(lista);



    })

    resumen.appendChild(heading);
    resumen.appendChild(mesa);
    resumen.appendChild(hora);
    resumen.appendChild(grupo);

    contenido.appendChild(resumen);

    // Mostrar formulario de propinas
    formularioPropinas()

}

function eliminarProducto(id) {
    
    const { pedido } = cliente;
    const resultado = pedido.filter( articulo => articulo.id !== id);

    cliente.pedido = [...resultado];

    limpiarHTML()

    if (cliente.pedido.length) {
        // Mostrar el resumen
        actualizarResumen();
    } else {
        mensajePedidoVacio();
    }

    // El producto se eliminó, el contador debe regresar a 0

    const productoEliminado = `#producto-${id}`;
    const inputEliminado = document.querySelector(productoEliminado);

    inputEliminado.value = 0;

}

function formularioPropinas() {
    
    const contenido = document.querySelector('#resumen .contenido');

    const formulario = document.createElement('div');
    formulario.classList.add('col-md-6', 'formulario');

    const divFomulario = document.createElement('div');
    divFomulario.classList.add('card','py-2','px-3','shadow')

    const heading = document.createElement('h3');
    heading.classList.add('my-4','text-center');
    heading.textContent = 'Propina';

    // Radio button 10%

    const radio10 = document.createElement('input');
    radio10.type = 'radio';
    radio10.name = 'propina';
    radio10.value = '10';
    radio10.classList.add('form-check-input');
    radio10.onclick = calcularPropina;

    const radio10Label = document.createElement('label');
    radio10Label.textContent = '10%';
    radio10Label.classList.add('form-check-label');

    const radio10Div = document.createElement('div');
    radio10Div.classList.add('form-check');

    radio10Div.appendChild(radio10);
    radio10Div.appendChild(radio10Label);

    // Radio button 25%

    const radio25 = document.createElement('input');
    radio25.type = 'radio';
    radio25.name = 'propina';
    radio25.value = '25';
    radio25.classList.add('form-check-input');
    radio25.onclick = calcularPropina;

    const radio25Label = document.createElement('label');
    radio25Label.textContent = '25%';
    radio25Label.classList.add('form-check-label');

    const radio25Div = document.createElement('div');
    radio25Div.classList.add('form-check');

    radio25Div.appendChild(radio25);
    radio25Div.appendChild(radio25Label);

    // Radio button 50%

    const radio50 = document.createElement('input');
    radio50.type = 'radio';
    radio50.name = 'propina';
    radio50.value = '50';
    radio50.classList.add('form-check-input');
    radio50.onclick = calcularPropina;

    const radio50Label = document.createElement('label');
    radio50Label.textContent = '50%';
    radio50Label.classList.add('form-check-label');

    const radio50Div = document.createElement('div');
    radio50Div.classList.add('form-check');

    radio50Div.appendChild(radio50);
    radio50Div.appendChild(radio50Label);


    // Agregar al div principal
    divFomulario.appendChild(heading);
    divFomulario.appendChild(radio10Div);
    divFomulario.appendChild(radio25Div);
    divFomulario.appendChild(radio50Div);
    formulario.appendChild(divFomulario);

    contenido.appendChild(formulario);



}

function limpiarHTML() {
    const contenido = document.querySelector('#resumen .contenido');

    while(contenido.firstChild){
        contenido.removeChild(contenido.firstChild);
    }
}

function calcularSubtotal( precio , cantidad ) {
    
    return `$ ${precio * cantidad}`

}

function mensajePedidoVacio() {
    
    const contenido = document.querySelector('#resumen .contenido');

    const texto = document.createElement('p');
    texto.classList.add('text-center');
    texto.textContent = 'Añade los elementos del pedido';

    contenido.appendChild(texto);        
}

function calcularPropina() {
    
    const { pedido } = cliente
    let subtotal = 0;

    // Calcular el subtotal a pagar
    pedido.forEach(articulo => {
        subtotal += articulo.cantidad * articulo.precio;
    })

    // Seleccionar el radio button
    const propinaSeleccionada = document.querySelector('[name="propina"]:checked').value;

    // Calcular la propina
    const propina = ((subtotal * parseInt(propinaSeleccionada)) / 100);

    // Calcular el total a pagar

    const total = subtotal + propina;

    mostrarTotalHTML(subtotal, total, propina)
}

function mostrarTotalHTML(subtotal, total, propina) {
    
    const divTotales = document.createElement('div');
    divTotales.classList.add('total-pagar','my-5');

    
    // Subtotal
    const subtotalParrafo = document.createElement('p');
    subtotalParrafo.classList.add('fs-5','fw-bold','mt-1');
    subtotalParrafo.textContent = 'Subtotal: ';

    const subtotalSpan = document.createElement('span');
    subtotalSpan.classList.add('fw-normal');
    subtotalSpan.textContent = `$ ${subtotal}`;

    subtotalParrafo.appendChild(subtotalSpan);

    // Propina
    const propinaParrafo = document.createElement('p');
    propinaParrafo.classList.add('fs-5','fw-bold','mt-1');
    propinaParrafo.textContent = 'Propina: ';

    const propinaSpan = document.createElement('span');
    propinaSpan.classList.add('fw-normal');
    propinaSpan.textContent = `$ ${propina}`;

    propinaParrafo.appendChild(propinaSpan);

    // Total
    const totalParrafo = document.createElement('p');
    totalParrafo.classList.add('fs-3','fw-bold','mt-3');
    totalParrafo.textContent = 'Total: ';

    const totalSpan = document.createElement('span');
    totalSpan.classList.add('fw-normal');
    totalSpan.textContent = `$ ${total}`;

    totalParrafo.appendChild(totalSpan);

    // Eliminar el último resultado
    const totalPagarDiv = document.querySelector('.total-pagar');
    if(totalPagarDiv) {
        totalPagarDiv.remove();
    }


    divTotales.appendChild(subtotalParrafo);
    divTotales.appendChild(propinaParrafo);
    divTotales.appendChild(totalParrafo);

    const formulario = document.querySelector('.formulario > div');
    formulario.appendChild(divTotales)

}