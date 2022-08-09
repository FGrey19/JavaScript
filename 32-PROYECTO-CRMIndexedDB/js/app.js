(function () {

    let DB;
    
    document.addEventListener('DOMContentLoaded', () => {
        crearDB();
    })

    // Crea la Base de Datos de IndexDB
    function crearDB() {
        const crearDB = window.indexedDB.open('crm',1);

        crearDB.onerror = function() {
            console.log('Hubo un error');
        }

        crearDB.onsuccess = function() {
            DB = crearDB.result;
        }

    }

})();