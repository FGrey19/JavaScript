import nuevaFuncion, {nombreCliente as clientenombre, ahorro, mostrarInformacion, tieneSaldo, Cliente} from './cliente.js'
import { Empresa } from './empresa.js';


console.log(clientenombre);
// console.log(nombreCliente2); ej. usando window
console.log(ahorro);

console.log(mostrarInformacion(clientenombre,ahorro));

tieneSaldo(ahorro);

const cliente = new Cliente(clientenombre,ahorro);

console.log(cliente.mostrarInformacion(clientenombre,ahorro));

// Importar empresa


const empresa = new Empresa('Código con Juan', 5000, 'Aprendizaje en Línea');

console.log(empresa.mostrarInformacion());

// Export default
// Solo puede haber uno
nuevaFuncion();