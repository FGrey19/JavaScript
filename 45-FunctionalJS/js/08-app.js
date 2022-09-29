// Los closure es una forma de acceder a una función, o valor dentro de ella, desde el exterior

 // EJEMPLO DE SCOPE
// const cliente = 'Fernando';

// function mostrarCliente() {
//     const cliente = 'Carrasco';

//     console.log(cliente);
// }

// console.log(cliente);
// mostrarCliente();

const obtenerCliente = () => {
    const nombre = 'Fernando';

    function muestraNombre() {
        console.log(nombre);
    }

    return muestraNombre();

}

const cliente = obtenerCliente();

console.log(cliente);