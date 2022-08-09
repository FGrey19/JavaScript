const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault(); //anula el comportamiento por defecto del formulario

    console.log('Consultar API')

    console.log(e.target.action);
}

