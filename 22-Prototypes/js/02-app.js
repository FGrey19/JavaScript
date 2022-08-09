function cliente(nombre,saldo) {
    this.nombre = nombre;
    this.saldo = saldo;

}

const juan = new cliente('juan',500);

function formatearCliente(cliente) {
    const {nombre,saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

function formatearEmpresa(empresa) {
    const {nombre, saldo, categoria} = empresa;
    return `El cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}`;
}

console.log(formatearCliente(juan));

function empresa(nombre,saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
};

const CCJ = new empresa('Código con Juan', 4000, 'Cursos en línea');
console.log(formatearEmpresa(CCJ))
