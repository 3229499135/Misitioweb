// Para visualizar el contenedor modal
let producto = document.getElementById("producto");
let btnX = document.getElementById("btnX");
let despregable = document.getElementById('despregable');

producto.addEventListener('click', function() {
    despregable.style.display = 'flex';
});
btnX.addEventListener('click', function() {
    despregable.style.display = 'none';
});

// Para seleccionar la imagen
let productoImgUno = document.getElementById("productoImgUno");
let productoImgDos = document.getElementById("productoImgDos");
let productoImgTres = document.getElementById("productoImgTres");
let productoImgCuatro = document.getElementById("productoImgCuatro");
let productoImgCinco = document.getElementById("productoImgCinco");
let productoImgSeis = document.getElementById("productoImgSeis");
let productoImgSiete = document.getElementById("productoImgSiete");
let productoImgOcho = document.getElementById("productoImgOcho");
let imgProducto = document.getElementById('imgProducto');

productoImgUno.addEventListener('click', function() {
    imgProducto.setAttribute("src","img/auriculares1.jpg");
    productoImgUno.style.borderColor = '#FF8F00';
    productoImgDos.style.borderColor = '#D5D9D9';
    productoImgTres.style.borderColor = '#D5D9D9';
    productoImgCuatro.style.borderColor = '#D5D9D9';
    productoImgCinco.style.borderColor = '#D5D9D9';
    productoImgSeis.style.borderColor = '#D5D9D9';
    productoImgSiete.style.borderColor = '#D5D9D9';
    productoImgOcho.style.borderColor = '#D5D9D9';
});
productoImgDos.addEventListener('click', function() {
    imgProducto.setAttribute("src","img/auriculares1-2.jpg");
    productoImgUno.style.borderColor = '#D5D9D9';
    productoImgDos.style.borderColor = '#FF8F00';
    productoImgTres.style.borderColor = '#D5D9D9';
    productoImgCuatro.style.borderColor = '#D5D9D9';
    productoImgCinco.style.borderColor = '#D5D9D9';
    productoImgSeis.style.borderColor = '#D5D9D9';
    productoImgSiete.style.borderColor = '#D5D9D9';
    productoImgOcho.style.borderColor = '#D5D9D9';
});
productoImgTres.addEventListener('click', function() {
    imgProducto.setAttribute("src","img/auriculares1-3.jpg");
    productoImgUno.style.borderColor = '#D5D9D9';
    productoImgDos.style.borderColor = '#D5D9D9';
    productoImgTres.style.borderColor = '#FF8F00';
    productoImgCuatro.style.borderColor = '#D5D9D9';
    productoImgCinco.style.borderColor = '#D5D9D9';
    productoImgSeis.style.borderColor = '#D5D9D9';
    productoImgSiete.style.borderColor = '#D5D9D9';
    productoImgOcho.style.borderColor = '#D5D9D9';
});
productoImgCuatro.addEventListener('click', function() {
    imgProducto.setAttribute("src","img/auriculares1-4.jpg");
    productoImgUno.style.borderColor = '#D5D9D9';
    productoImgDos.style.borderColor = '#D5D9D9';
    productoImgTres.style.borderColor = '#D5D9D9';
    productoImgCuatro.style.borderColor = '#FF8F00';
    productoImgCinco.style.borderColor = '#D5D9D9';
    productoImgSeis.style.borderColor = '#D5D9D9';
    productoImgSiete.style.borderColor = '#D5D9D9';
    productoImgOcho.style.borderColor = '#D5D9D9';
});
productoImgCinco.addEventListener('click', function() {
    imgProducto.setAttribute("src","img/auriculares1-5.jpg");
    productoImgUno.style.borderColor = '#D5D9D9';
    productoImgDos.style.borderColor = '#D5D9D9';
    productoImgTres.style.borderColor = '#D5D9D9';
    productoImgCuatro.style.borderColor = '#D5D9D9';
    productoImgCinco.style.borderColor = '#FF8F00';
    productoImgSeis.style.borderColor = '#D5D9D9';
    productoImgSiete.style.borderColor = '#D5D9D9';
    productoImgOcho.style.borderColor = '#D5D9D9';
});
productoImgSeis.addEventListener('click', function() {
    imgProducto.setAttribute("src","img/auriculares1-6.jpg");
    productoImgUno.style.borderColor = '#D5D9D9';
    productoImgDos.style.borderColor = '#D5D9D9';
    productoImgTres.style.borderColor = '#D5D9D9';
    productoImgCuatro.style.borderColor = '#D5D9D9';
    productoImgCinco.style.borderColor = '#D5D9D9';
    productoImgSeis.style.borderColor = '#FF8F00';
    productoImgSiete.style.borderColor = '#D5D9D9';
    productoImgOcho.style.borderColor = '#D5D9D9';
});
productoImgSiete.addEventListener('click', function() {
    imgProducto.setAttribute("src","img/auriculares1-7.jpg");
    productoImgUno.style.borderColor = '#D5D9D9';
    productoImgDos.style.borderColor = '#D5D9D9';
    productoImgTres.style.borderColor = '#D5D9D9';
    productoImgCuatro.style.borderColor = '#D5D9D9';
    productoImgCinco.style.borderColor = '#D5D9D9';
    productoImgSeis.style.borderColor = '#D5D9D9';
    productoImgSiete.style.borderColor = '#FF8F00';
    productoImgOcho.style.borderColor = '#D5D9D9';
});
productoImgOcho.addEventListener('click', function() {
    imgProducto.setAttribute("src","img/auriculares1-8.jpg");
    productoImgUno.style.borderColor = '#D5D9D9';
    productoImgDos.style.borderColor = '#D5D9D9';
    productoImgTres.style.borderColor = '#D5D9D9';
    productoImgCuatro.style.borderColor = '#D5D9D9';
    productoImgCinco.style.borderColor = '#D5D9D9';
    productoImgSeis.style.borderColor = '#D5D9D9';
    productoImgSiete.style.borderColor = '#D5D9D9';
    productoImgOcho.style.borderColor = '#FF8F00';
});

// Función para manejar eventos de mousemove para los imagenes pequeña pase a la imagen principal con solo pasar el cursor
function cambiarImagenPrincipal(src) {
    originalImage.setAttribute("src", src);
}

const imgPrincipalUno = document.getElementById('productoImgMainUno');
const imgPrincipalDos = document.getElementById('productoImgMainDos');
const imgPrincipalTres = document.getElementById('productoImgMainTres');
const imgPrincipalCuatro = document.getElementById('productoImgMainCuatro');
const imgPrincipalCinco = document.getElementById('productoImgMainCinco');
const imgPrincipalSeis = document.getElementById('productoImgMainSeis');

imgPrincipalUno.addEventListener("mousemove", function() {
    cambiarImagenPrincipal("img/auriculares1.jpg");
    magnifier.style.backgroundImage = "url('img/auriculares1.jpg')";
});
imgPrincipalDos.addEventListener("mousemove", function() {
    cambiarImagenPrincipal("img/auriculares1-2.jpg");
    magnifier.style.backgroundImage = "url('img/auriculares1-2.jpg')";
});
imgPrincipalTres.addEventListener("mousemove", function() {
    cambiarImagenPrincipal("img/auriculares1-3.jpg");
    magnifier.style.backgroundImage = "url('img/auriculares1-3.jpg')";
});
imgPrincipalCuatro.addEventListener("mousemove", function() {
    cambiarImagenPrincipal("img/auriculares1-4.jpg");
    magnifier.style.backgroundImage = "url('img/auriculares1-4.jpg')";
});
imgPrincipalCinco.addEventListener("mousemove", function() {
    cambiarImagenPrincipal("img/auriculares1-5.jpg");
    magnifier.style.backgroundImage = "url('img/auriculares1-5.jpg')";
});
imgPrincipalSeis.addEventListener("mousemove", function() {
    cambiarImagenPrincipal("img/auriculares1-6.jpg");
    magnifier.style.backgroundImage = "url('img/auriculares1-6.jpg')";
});

// Esto es para las estrellas
var numeroDeEstrellas = 4.3;
let numberEstrella = document.getElementById("numberEstrella");
let estrellas = [
    document.getElementById("etrellaUno"),
    document.getElementById("etrellaDos"),
    document.getElementById("etrellaTres"),
    document.getElementById("etrellaCuatro"),
    document.getElementById("etrellaCinco")
];

// Asegurar que la calificación esté en el rango de 0 a 5
numeroDeEstrellas = Math.min(Math.max(numeroDeEstrellas, 0), 5);

numberEstrella.innerText = numeroDeEstrellas;

for (let i = 0; i < estrellas.length; i++) {
    estrellas[i].classList.remove("fa-regular", "fa-solid", "fa-star", "fa-star-half-stroke");

    if (i < Math.floor(numeroDeEstrellas)) {
        estrellas[i].classList.add("fa-solid", "fa-star");
    } else if (i === Math.floor(numeroDeEstrellas) && numeroDeEstrellas % 1 !== 0) {
        estrellas[i].classList.add("fa-regular", "fa-star-half-stroke");
    } else {
        estrellas[i].classList.add("fa-regular", "fa-star");
    }
}
// Finalizamos con lo de las estrellas



// Para la lupa
const imageContainer = document.querySelector('#producto');
const magnifier = document.querySelector('.magnifier');
const originalImage = document.getElementById('original-image');

imageContainer.addEventListener('mousemove', (e) => {
    const containerRect = imageContainer.getBoundingClientRect();
    const offsetX = e.clientX - containerRect.left;
    const offsetY = e.clientY - containerRect.top;

    const backgroundX = (offsetX / imageContainer.offsetWidth) * 100;
    const backgroundY = (offsetY / imageContainer.offsetHeight) * 100;

    magnifier.style.backgroundPosition = `${backgroundX}% ${backgroundY}%`;
    magnifier.style.display = 'block';
});
/* imageContainer.addEventListener('mousemove', (e) => {
    cordenadas.style.left = e.clientX - cordenadas.offsetWidth / 0.84 + 'px';
    cordenadas.style.top = e.clientY - cordenadas.offsetHeight / 0.74 + 'px';
    cordenadas.style.display = 'block';
}); */

imageContainer.addEventListener('mouseleave', () => {
    magnifier.style.display = 'none';
    /* cordenadas.style.display = 'none'; */
});

/* let textColor1 = document.getElementById("textColor1");

function contentImgUno() {
    var color =  "Azul";
    originalImage.setAttribute("src","img/auriculares1.jpg");
    textColor1.innerText = color;
}
function contentImgDos() {
    var color =  "Purpura";
    originalImage.setAttribute("src","img/auriculares2.jpg");
    textColor1.innerText = color;
}
function contentImgTres() {
    var color =  "Anaranjado";
    originalImage.setAttribute("src","img/auriculares3.jpg");
    textColor1.innerText = color;
} */

let auriculares1 = document.getElementById('auricular1');
let auriculares2 = document.getElementById('auricular2');
let auriculares3 = document.getElementById('auricular3');

auriculares1.addEventListener('mousemove', function(){
    contentImgUno();
    auriculares1.style.borderColor = "#0000FF";
    auriculares2.style.borderColor = "#D5D9D9";
    auriculares3.style.borderColor = "#D5D9D9";
});
auriculares2.addEventListener('mousemove', function(){
    contentImgDos();
    auriculares1.style.borderColor = "#D5D9D9";
    auriculares2.style.borderColor = "#0000FF";
    auriculares3.style.borderColor = "#D5D9D9";
});
auriculares3.addEventListener('mousemove', function(){
    contentImgTres();
    auriculares1.style.borderColor = "#D5D9D9";
    auriculares2.style.borderColor = "#D5D9D9";
    auriculares3.style.borderColor = "#0000FF";
});

auriculares1.addEventListener('click', function(){
    contentArticleUno();
    auriculares1.style.borderColor = "#FF8F00";
    auriculares2.style.borderColor = "#D5D9D9";
    auriculares3.style.borderColor = "#D5D9D9";
});
auriculares2.addEventListener('click', function(){
    contentArticleDos();
    auriculares1.style.borderColor = "#D5D9D9";
    auriculares2.style.borderColor = "#FF8F00";
    auriculares3.style.borderColor = "#D5D9D9";
});
auriculares3.addEventListener('click', function(){
    contentArticleTres();
    auriculares1.style.borderColor = "#D5D9D9";
    auriculares2.style.borderColor = "#D5D9D9";
    auriculares3.style.borderColor = "#FF8F00";
});