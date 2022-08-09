const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);
/*
console.log(encabezado.innerText); //Extrae el texto reduciendo espacios en blanco. Además, si en el CSS tiene visibility hidden, no lo extrae.
console.log(encabezado.textContent); //Extrae el texto sin reducir espacios en blanco. Sí extrae aunque tenga visibility:hidden en CSS.
console.log(encabezado.innerHTML); //Extrae el texto con HTML y sin reducir espacios en blanco
*/


// const nuevoEncabezado = 'Nuevo encabezado 2';
// document.querySelector('.contenido-hero h1').textContent = nuevoEncabezado;

const imagen = document.querySelector('.card img')
imagen.src = 'img/hacer2.jpg';

console.log(imagen);