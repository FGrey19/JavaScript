const enlace = document.createElement('a');
//Agregandole el texto
enlace.textContent = 'Nuevo enlace';
//Añadiendo href
enlace.href = '/nuevo-enlace';


console.log(enlace);

enlace.target='_blank';

enlace.setAttribute('data-enlace', 'nuevo-enlace');
enlace.classList.add('Alguna-clase');


// Seleccionar navegacion
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
navegacion.insertBefore(enlace,navegacion.children[1]); // primer elemento es lo que se insertará, segundo es donde se insertará

// Crear un card de forma dinamica

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de rock';
parrafo2.classList.add('titulo');


const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

//crear div con .info

const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//crear imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = 'Hacer';

//Crear card

const card = document.createElement('div');
card.classList.add('card');

//Asignar la imagen
card.appendChild(imagen);
card.appendChild(info);


//Insertar en el html

const contenedor = document.querySelector('.hacer .contenedor-cards');

contenedor.insertBefore(card, contenedor.firstElementChild);
