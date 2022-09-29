// Currying es dividir una función que toma más de un parámetro, en argumentos de forma parcial.

const suma = (a,b,c) => a + b + c;

const parcial = a => (b, c) => suma(a,b,c);

const primerNumero = parcial(5);
const resultado = primerNumero(5,5);
console.log(resultado);

const parcial2 = a => b => c => suma(a,b,c);
const primerNum = parcial2(5);
const segundoNum = primerNum(5);
const resultado2 = segundoNum(5);

// También puede escribirse de esta forma

const resultado3 = parcial2(1)(2)(3);

console.log(resultado2);
console.log(resultado3);

console.log(suma(1,2,3));