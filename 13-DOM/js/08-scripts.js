const navegacion = document.querySelector('.navegacion');

console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);

// console.log(navegacion.childNodes); // Los espacios en blanco también son nodos
// console.log(navegacion.children); //Muestra los elementos html

// console.log(navegacion.children[1].nodeName)
// console.log(navegacion.children[1].nodeType)

const card = document.querySelector('.card');

// console.log(card.children[1].children[1].textContent);
// card.children[1].children[1].textContent = 'Musica academica';

// card.children[0].src = 'img/hacer3.jpg';
// console.log(card.children)

// Traversing de hijo a padre

// console.log(card.parentElement.parentElement);

// Moverse entre hermanos

// console.log(card);
// console.log(card.nextElementSibling);
// console.log(card.nextElementSibling.nextElementSibling);

// const ultimoCard = document.querySelector('.card:last-of-type');
// console.log(ultimoCard.previousElementSibling);

