window.addEventListener('scroll',()=>{
    
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect(); //te dice donde esta el elemento en la pantalla desde la posición del scroll

    if(ubicacion.top < 100 && ubicacion.bottom > 100){
        console.log('El elemento es visible');
        console.log(ubicacion);
    } else {
        console.log('El elemento no es visible');
        console.log(ubicacion);
    }
});