const carrito = [
    { nombre: 'Monitor 32 pulgadas', precio: 300 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Mouse', precio: 40 },
    { nombre: 'Disco duro', precio: 500 },
    { nombre: 'Memoria RAM', precio: 100 },
    { nombre: 'Procesador', precio: 300 },
] 

// MAP - Crea un nuevo array con los resultados de la función

const nuevoArreglo = carrito.map( producto =>  `${producto.nombre} - Precio: ${producto.precio}`)

// forEach - No crea un nuevo array, sino que modifica el array original

const nuevoArreglo2 = carrito.forEach( (producto) => {
    return `${producto.nombre} - Precio: ${producto.precio}`;
})

console.log(nuevoArreglo);
console.log(nuevoArreglo2);