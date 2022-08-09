import { datosCita, nuevaCita, mostrarStorage } from "../funciones.js";

import { 
    mascotaInput, 
    propietarioInput,
    telefonoInput, 
    fechaInput, 
    horaInput, 
    sintomasInput, 
    formulario 
} from "../selectores.js";

class App {
    constructor() {
        this.initApp();
    }

    initApp() {
        mascotaInput.addEventListener('change', datosCita);
        propietarioInput.addEventListener('change', datosCita);
        telefonoInput.addEventListener('change', datosCita);
        fechaInput.addEventListener('change', datosCita);
        horaInput.addEventListener('change', datosCita);
        sintomasInput.addEventListener('change', datosCita);

        // Submit
        formulario.addEventListener('submit', nuevaCita);

        // Para cargar localStorage
        document.addEventListener('DOMContentLoaded', mostrarStorage);
    }
}

export default App;