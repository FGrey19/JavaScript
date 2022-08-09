const autenticado = true;

if(autenticado) {
    console.log('El usuario está autenticado')
}


const puntaje = 300;


function revisarPuntaje(puntaje) {
    if(puntaje >= 400) {
        console.log('Buen puntaje');
        return;
    } else if (puntaje >= 300) {
        console.log('Regular');
        return;
    }
}

revisarPuntaje(puntaje);