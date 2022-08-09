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

carrito.map( function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`)
})

// forEach - No crea un nuevo array, sino que modifica el array original

carrito.forEach( function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`)
})

