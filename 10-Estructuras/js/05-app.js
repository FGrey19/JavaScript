// switch case

const metodopago= 'efectivo';

switch(metodopago) {
    case 'efectivo':
        console.log('Usted pagó con efectivo');
        break;
    case 'tarjeta':
        console.log('Usted pagó con tarjeta');
        break;
    case 'cheque':
        console.log('Usted pagó con cheque');
        break;
    default:
        console.log('Aún no has seleccionado un método de pago, o método de pago no soportado')
}