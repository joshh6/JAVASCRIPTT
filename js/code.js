//TITLE CREATOR
window.addEventListener('scroll', function() {
    let animacion = document.getElementById("titCreador");
    let posicionObj1 = animacion.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight;
    if(posicionObj1 < tamañoPantalla) {
        animacion.style.animation = 'titCreador 0.8s ease-out';

    }
})
//IMAGE CREATOR
window.addEventListener('scroll', function() {
    let animacion = document.getElementById("imgCreador");
    let posicionObj1 = animacion.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight;
    if(posicionObj1 < tamañoPantalla) {
        animacion.style.animation = 'imgCreador 0.8s ease-out'
    }
})


//TITLE GUIA
window.addEventListener('scroll', function() {
    let animacion = document.getElementById("titGuia");
    let posicionObj1 = animacion.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight;
    if(posicionObj1 < tamañoPantalla) {
        animacion.style.animation = 'titGuia 0.5s'
    }
})
//TITLE GUIA - textUno
window.addEventListener('scroll', function() {
    let animacion = document.getElementById("textuno");
    let posicionObj1 = animacion.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight;
    if(posicionObj1 < tamañoPantalla) {
        animacion.style.animation = 'textuno 0.5s'
    }
})
//TITLE GUIA - tizq
window.addEventListener('scroll', function() {
    let animacion = document.getElementById("tizq");
    let posicionObj1 = animacion.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight;
    if(posicionObj1 < tamañoPantalla) {
        animacion.style.animation = 'tizq 0.4s'
    }
})
//TITLE GUIA - tder
window.addEventListener('scroll', function() {
    let animacion = document.getElementById("tder");
    let posicionObj1 = animacion.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight;
    if(posicionObj1 < tamañoPantalla) {
        animacion.style.animation = 'tder 0.4s'
    }
})