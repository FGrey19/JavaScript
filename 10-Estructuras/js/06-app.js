const usuario = false;
const puedePagar = true;

if(usuario && puedePagar) {
    console.log('Si eres usuario y puedes pagar');
} else if (!usuario) {
    console.log('No eres usuario. Inicia sesión, o registrate');
} else if (!puedePagar) {
    console.log('Fondos insuficientes')
} else {
    console.log('No, no puedes comprar')
}