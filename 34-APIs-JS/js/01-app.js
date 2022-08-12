const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then( resultado => {
            console.log('El resultado es ', resultado);
        })
});

const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        const notificacion =new Notification('Esta es la notificación', {
            icon: 'img/ccj.png',
            body: 'Aprendiendo JS con Proyectos',

        });

        notificacion.onclick = function () {
            window.open('https://github.com/FGrey19/JavaScript')
        }
    }
})