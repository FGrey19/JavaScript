iniciarApp();

function iniciarApp() {
    console.log('Iniciando app');

    segundaFuncion();
}


function segundaFuncion() {
    console.log('Segunda funcion');
    usuarioAutenticado('Pablo');
}

function usuarioAutenticado(usuario) {
    console.log(`Autenticando a ${usuario}`);
    console.log(`${usuario} Autenticado exitosamente`)
}