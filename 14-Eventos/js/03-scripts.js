const busqueda = document.querySelector('.busqueda');

// Cuando pulsamos una tecla

busqueda.addEventListener('keydown',() => {
    console.log('Escribiendo...');
})

// Cuando soltamos la tecla

busqueda.addEventListener('keyup',() => {
    console.log('Dejando de escribir');
})

// Blur cuando dejamos el elemento

busqueda.addEventListener('blur',() => {
    console.log('saliendo');
})

// Copy cuando copiamos un elemento

busqueda.addEventListener('copy',() => {
    console.log('Copiando');
})

//Paste cuando pegamos

busqueda.addEventListener('paste',() => {
    console.log('Pegando');
})

//Cuando cortamos

busqueda.addEventListener('cut',() => {
    console.log('Cortando');
})

//Input escucha cualquier cambio

busqueda.addEventListener('input',(e) => {
    console.log(e.target.value); //para saber qué esta escribiendo el usuario
})



