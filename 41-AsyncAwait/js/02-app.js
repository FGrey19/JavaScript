function descargarClientes() {
    
    return new Promise((resolve, reject) => {
        const error = true;

        setTimeout(() => {
            if (!error) {
                resolve('El listado de clientesse descargó correctamente');
            } else {
                reject('Error en la conexión');
            }
        }, 3000);
    })
};

// Async Await

async function ejecutar() {
    try {
        console.log(1+1);
        const respuesta = await descargarClientes();

        console.log(2+2);
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
}

ejecutar();