const aplicarDescuento = new Promise( (resolve, reject) => {
    
    const descuento = true;

    if(descuento) {
        resolve('Descuento aplicado');
    } else {
        reject('No se pudo aplicar el descuento')
    }
})

aplicarDescuento
    .then(resultado => descuento(resultado))
    .catch(error => console.log(error))


function descuento(mensaje) {
    console.log(mensaje);
}


// Hay 3 valores posibles...
// fulfilled - El promise se cumplió
// rejected - El promise no se cumplió
// pending - El promise está en espera