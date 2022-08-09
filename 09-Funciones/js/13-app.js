
const reproductor = {
    cancion: '',
    reproducir: id => console.log('Reproduciendo canción con id: ' + id),
    pausar: ()  =>  console.log('Pausando canción'),
    
    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo canción: ${cancion}`);
    },

    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = 'Gratiscation';
reproductor.obtenerCancion;


reproductor.reproducir(30);
reproductor.pausar();

reproductor.borrar = () =>  console.log('Borrando canción');

reproductor.borrar();