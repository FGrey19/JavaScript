const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
//se deben cumplir todos los requisitos para que sea true
const resultado = carrito.every( producto => producto.precio > 99);
console.log(resultado);

// con .some se puede cumplir alguno de los requisitos
