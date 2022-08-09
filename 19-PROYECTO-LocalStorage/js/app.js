// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];



// Event Listeners

eventListeners();

function eventListeners () {
    // Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    // Cuando el documento esté cargado
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || []; //Si no hay tweets en LS, lo que hace el último operador es crear un array vacío en caso de que obtenga Null

        console.log(tweets);

        crearHTML();
    })

};

// Funciones

function agregarTweet(e) {
    e.preventDefault();

    //Textarea donde el usuario escribe

    const tweet = document.querySelector('#tweet').value;
    
    if (tweet === '') {
        mostrarError('Un mensaje no puede ir vacío');

        return; //evita que se ejecuten más líneas de código
    };

    const tweetObj = {
        id:Date.now(),
        tweet
    }

    // Añadir al arreglo de tweets
    tweets = [...tweets,tweetObj];
    console.log(tweets);

    // Una  vez agregado, creamos el HTML
    crearHTML();

    //Reiniciar el formulario
    formulario.reset();

}

// Mostrar mensaje de error
function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertarlo en el contenido

    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);



    // Elimina la alerta después de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

function crearHTML() {

    //Limpia HTML
    limpiarHTML();

    if(tweets.length > 0){
        tweets.forEach(tweet => {
            // Agregar botón de eliminar
            const btnEliminar= document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            // Añadir la funcion de eliminar
            btnEliminar.onclick = () =>{
                borrarTweet(tweet.id);
            }



            // Creamos el html

            const li = document.createElement('li');

            //Añadimos el texto

            li.innerText = tweet.tweet;

            // Asignar botón
            li.appendChild(btnEliminar);


            // Insertar en el HTML
            listaTweets.appendChild(li);

        })
    };

    sincronizarStorage();


}


// Agregamos los tweets actuales a Local Storage
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets))
};


// Eliminar tweet
function borrarTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id);

    crearHTML();
}

//Limpiamos HTML

function limpiarHTML() {
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
};

