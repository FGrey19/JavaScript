localStorage.setItem('nombre', 'Fernando'); // Es más permanente

sessionStorage.setItem('nombre', 'Fernando'); // Se elimina al cerrar el navegador

// LocalStorage solo almacena Strings, hay que convertir los otros tipos de datos a JSON

const producto = {
    nombre: 'Monitor 24 pulgadas',
    precio: 300
}

const productoString = JSON.stringify(producto);


localStorage.setItem('producto', productoString);


const meses = ['Enero','Febrero','Marzo'];

localStorage.setItem('meses', JSON.stringify(meses));