class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de $ ${this.saldo}`;
    }

    // Propiedades estáticas. Para mostrarlas no requieren una instancia
    // Además, pertenecen a la clase como tal.
    static bienvenida() {
        return `Bienvenido al cajero`
    }

}

const fernando = new Cliente('Fernando', 400);
console.log(fernando.mostrarInformacion());
console.log(Cliente.bienvenida());


const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de $ ${this.saldo}`;
    }
}

console.log(fernando.mostrarInformacion());
const fernando2 = new Cliente2('Fernando', 400);
console.log(fernando2);