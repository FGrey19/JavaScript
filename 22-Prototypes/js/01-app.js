function cliente(nombre,saldo) {
    this.nombre = nombre;
    this.saldo = saldo;

}

const juan = new cliente('juan',500);
console.log(juan);