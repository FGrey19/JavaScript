"use strict"

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

Object.seal(producto);

producto.disponible = false;
// producto.imagen = 'https://www.google.com/img/branding/googlelogo/2x/googlelogo_color_272x92dp.png';

console.log(producto);

console.log(Object.isSealed(producto));