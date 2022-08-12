document.addEventListener('DOMContentLoaded', () => {
    
    const observer = new IntersectionObserver( entries => {
        
        if (entries[0].isIntersecting === true) {
            console.log('Ya está visible');
        }

    } );

    observer.observe(document.querySelector('.premium'));

})