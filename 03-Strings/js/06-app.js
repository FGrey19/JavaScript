const producto = 'Monitor 20 Pulgadas';

// .repeat te va a permitir repetir una cadena de texto

const texto = ' en Promoción'.repeat(3);

console.log(texto);
console.log(`${producto} ${texto}`);

//split divide un string

const actividad ='Estoy aprendiendo js moderno';
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar música, escribir, aprender a programar'
console.log(hobbies.split(', '));

const tweet = 'Aprendiendo Javascript #JSModernoConJuan';
console.log(tweet.split('#'))
