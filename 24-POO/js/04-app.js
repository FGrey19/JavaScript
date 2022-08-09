class Cliente {

    #nombre; // Para establecer elementos privados

   setNombre(nombre) {
    this.#nombre= nombre;
   };

   getNombre() {
    return this.#nombre;
   };

};