
const reproductor = {
    reproducir: function(id) {
        console.log('Reproduciendo canción con id: ' + id);
    },
    pausar: function() {
        console.log('Pausando canción');
    }
}

reproductor.reproducir(30);
reproductor.pausar();

reproductor.borrar = function() {
    console.log('Borrando canción');
}

reproductor.borrar();