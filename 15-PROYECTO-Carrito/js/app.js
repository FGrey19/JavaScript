// Establecemos variables para seleccionar elementos del DOM

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody'); //Aquí se encuentra el contenedor de los productos del carrito
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); //Boton para vaciar el carrito
const listaCursos = document.querySelector('#lista-cursos');

let articulosCarrito = [];



//Funcion para almacenar event listeners

cargarEventListeners();
function cargarEventListeners() {
    //Cuando se agrega un producto al carrito con "agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);
};

    //Elimina un curso del carrito

    carrito.addEventListener('click', eliminarCurso);

    //Vaciar el carrito

    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; //Se resetea el arreglo
        
        limpiarHTML();
    });


// Funciones

function agregarCurso(e) {
    e.preventDefault(); //para evitar que suba cuando damos click en el boton

    if(e.target.classList.contains('agregar-carrito')){

        const cursoSeleccionado = e.target.parentElement.parentElement;

        leerDatosCurso(cursoSeleccionado);
    }
    
};

//Elimina un curso del carrito
function eliminarCurso(e) {
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        //Elimina del arreglo articulosCarrito por el data-id

        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);


        //Iteramos sobre el carrito para mostrar el html
        carritoHtml();
    }
}



//Leer el contenido del HTML para extraer la información del curso

function leerDatosCurso(curso) {

    //Creamos un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    }

    //Revisamos si el curso ya está en el carrito

    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id);

    if (existe) {
        // Actualizamos la cantidad 
        const cursos = articulosCarrito.map( curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso; // retorna el objeto actualizado
            } else {
                return curso; //retorna los objetos que no son duplicados
            }
        });
        articulosCarrito = [...cursos];
    } else {
   
    //Agregamos el objeto al carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }
    console.log(articulosCarrito);

    carritoHtml();
};


// Muestra el carrito en el DOM

function carritoHtml() {

    //Limpiar HTML del carrito

    limpiarHTML();

    //Recorre el carrito y lo muestra en el HTML
    articulosCarrito.forEach(curso => {
        const {imagen,titulo,precio,cantidad,id} = curso;

        console.log(curso);
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width = 100px >
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href='#' class = 'borrar-curso' data-id=${id}> X </a>
            </td>
        `;
        contenedorCarrito.appendChild(row);

    });

}

//Elimina los cursos del tbody
function limpiarHTML() {
    //Forma lenta
    // contenedorCarrito.innerHTML = '';

    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }

}