import { subirStorage } from "../funciones.js";


// CLasses
class Citas {
    constructor() {
        this.citas = JSON.parse(localStorage.getItem('citas')) || [] ;
    }
    agregarCita(cita) {
        this.citas = [...this.citas, cita];
        subirStorage();
    }
    editarCita(citaActualizada) {
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita);
        subirStorage();
    }

    eliminarCita(id) {
        this.citas = this.citas.filter( cita => cita.id !== id);
        subirStorage();
    }
}

export default Citas;