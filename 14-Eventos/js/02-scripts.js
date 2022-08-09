const nav = document.querySelector('.navegacion');

// Registras un evento

// Cuando se da un click completo, es decir, lo contabililiza solo hasta que suelta el click.

nav.addEventListener('click', () => {
    console.log('click en nav');
    
}); 

// mouseenter cuando posamos el cursor sobre el elemento

nav.addEventListener('mouseenter', () => {
    console.log('sobre nav'); 
    nav.style.backgroundColor = 'white';
});

//mouseout cuando sacamos el cursor del elemento

nav.addEventListener('mouseout', () => {
    console.log('fuera de nav'); 
    nav.style.backgroundColor = 'transparent';
});

//mouse down cuando presionamos el boton del mouse

nav.addEventListener('mousedown', () => {
    console.log('presionando nav'); 
});

//mouse up cuando soltamos el boton del mouse

nav.addEventListener('mouseup', () => {
    console.log('soltando nav'); 
});

//dblclick cuando hacemos doble click

nav.addEventListener('dblclick', () => {
    console.log('doble click'); 
});

