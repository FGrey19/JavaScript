// Para evitar que haya errores al usar elementos con los mismos nombres en diferentes archivos, se ejecutan dentro de una función.
// IIFE

(function(){
    const nombreCliente = 'Fernando';

    // Si queremos que se pueda acceder a un elemento dentro del IIFE, una opción sería usar la ventana global, pero no se recomienda
    window.nombreCliente2 = 'Juan';

})();

// Usamos export para que un elemento pueda ser importado en otro archivo

export const nombreCliente = 'Fernando'; 
export const ahorro = 200;


// Para exportar FUNCIONES

export function mostrarInformacion(nombre,ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
};


export function tieneSaldo(ahorro) {
    if(ahorro > 0){
        console.log('Si tiene saldo');
    } else {
        console.log('No tiene saldo');
    }
}

export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}

// Export por default

export default function nuevaFuncion() {
    console.log('Desde nueva funcion default');
}