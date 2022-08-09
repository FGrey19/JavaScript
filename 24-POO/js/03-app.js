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

// Herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super( nombre, saldo ); //Para heredar atributos del constructor
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida() { // reescribir un método
        return `Bienvenido al cajero de empresas`
    }

}

const cliente = new Cliente('Fernando', 400);
const empresa = new Empresa('Código con Juan',500,10293002,'Aprendizaje en linea');

console.log(empresa);

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());