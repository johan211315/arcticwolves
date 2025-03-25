var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,  /* Número de libros visibles por defecto */
    spaceBetween: 15,  /* Espacio entre los libros */
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: { 
            slidesPerView: 4, /* 4 libros en tablets */
            spaceBetween: 20  /* Ajuste del espacio */
        }, 
        1024: { 
            slidesPerView: 5, /* 5 libros en pantallas grandes */
            spaceBetween: 25  
        }
    }
});

