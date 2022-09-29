// Funciones que retornan funciones

const obtenerCliente = () => () => console.log('Fernando Carrasco');

const fn = obtenerCliente();

fn();