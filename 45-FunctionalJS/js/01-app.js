// First class functions
// Significa que las funciones pueden asignarse como variables, es decir, como function expressión, y pueden ser usadas como argumentos

const suma = function (a, b) {
    return a + b;
}

const resultado = suma;

console.log(resultado(10, 20));