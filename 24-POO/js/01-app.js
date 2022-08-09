// Class Declaration

class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const fernando = new Cliente('Fernando', 400);
console.log(fernando);


// Class expression

const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const fernando2 = new Cliente2('Fernando', 400);
console.log(fernando2);