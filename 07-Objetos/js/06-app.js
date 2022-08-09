const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    informacion : {
        medidas : {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion: {
            pais: 'China'
        }
    }
}

const {nombre, precio, disponible, informacion} = producto;

console.log(nombre);
console.log(precio);
console.log(disponible);
console.log(informacion);

const {informacion: {fabricacion: {pais}}} = producto;
console.log(pais);