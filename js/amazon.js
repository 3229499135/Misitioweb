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
// Finalizamos lo de la visualizacion del modal

// Para seleccionar la imagen del modal
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
// End of selectión of the imeges of modal

// Para el border inferior de los textos superiores del modal
let textVideo = document.getElementById("textVideo");
let textImage = document.getElementById("textImage");

textImage.addEventListener("click", function() {
    textImage.style.borderColor = "#FFA41C";
    textVideo.style.borderColor = "transparent";
});
textVideo.addEventListener("click", function() {
    textImage.style.borderColor = "transparent";
    textVideo.style.borderColor = "#FFA41C";
});
// End of text superior of the modal

// Para darle zoon a la imagen principal del modal
document.addEventListener("DOMContentLoaded", function() {
    let productoContentModal = document.getElementById("productoContentModal");
    let imgProducto = document.getElementById("imgProducto");
    
    let isZoomed = false;

    productoContentModal.addEventListener("click", function() {
        if (isZoomed) {
            imgProducto.style.width = "400px";
            imgProducto.style.height = "auto"; // Set height to auto for maintaining aspect ratio
            productoContentModal.style.cursor = "zoom-in";
        } else {
            imgProducto.style.width = "100%"; // Adjust the zoom level as needed
            imgProducto.style.height = "auto"; // Set height to auto for maintaining aspect ratio
            productoContentModal.style.cursor = "zoom-out";
        }

        isZoomed = !isZoomed;
    });
});
// End of zoon of the image of modal

// Función para manejar eventos de mousemove 
// para que las imagenes pequeñas pase a la imagen principal con solo pasar el cursor
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
    imgPrincipalUno.classList.add("borderProductoMain");
    imgPrincipalDos.classList.remove("borderProductoMain");
    imgPrincipalTres.classList.remove("borderProductoMain");
    imgPrincipalCuatro.classList.remove("borderProductoMain");
    imgPrincipalCinco.classList.remove("borderProductoMain");
    imgPrincipalSeis.classList.remove("borderProductoMain");
});
imgPrincipalDos.addEventListener("mousemove", function() {
    cambiarImagenPrincipal("img/auriculares1-2.jpg");
    magnifier.style.backgroundImage = "url('img/auriculares1-2.jpg')";
    imgPrincipalUno.classList.remove("borderProductoMain");
    imgPrincipalDos.classList.add("borderProductoMain");
    imgPrincipalTres.classList.remove("borderProductoMain");
    imgPrincipalCuatro.classList.remove("borderProductoMain");
    imgPrincipalCinco.classList.remove("borderProductoMain");
    imgPrincipalSeis.classList.remove("borderProductoMain");
});
imgPrincipalTres.addEventListener("mousemove", function() {
    cambiarImagenPrincipal("img/auriculares1-3.jpg");
    magnifier.style.backgroundImage = "url('img/auriculares1-3.jpg')";
    imgPrincipalUno.classList.remove("borderProductoMain");
    imgPrincipalDos.classList.remove("borderProductoMain");
    imgPrincipalTres.classList.add("borderProductoMain");
    imgPrincipalCuatro.classList.remove("borderProductoMain");
    imgPrincipalCinco.classList.remove("borderProductoMain");
    imgPrincipalSeis.classList.remove("borderProductoMain");
});
imgPrincipalCuatro.addEventListener("mousemove", function() {
    cambiarImagenPrincipal("img/auriculares1-4.jpg");
    magnifier.style.backgroundImage = "url('img/auriculares1-4.jpg')";
    imgPrincipalUno.classList.remove("borderProductoMain");
    imgPrincipalDos.classList.remove("borderProductoMain");
    imgPrincipalTres.classList.remove("borderProductoMain");
    imgPrincipalCuatro.classList.add("borderProductoMain");
    imgPrincipalCinco.classList.remove("borderProductoMain");
    imgPrincipalSeis.classList.remove("borderProductoMain");
});
imgPrincipalCinco.addEventListener("mousemove", function() {
    cambiarImagenPrincipal("img/auriculares1-5.jpg");
    magnifier.style.backgroundImage = "url('img/auriculares1-5.jpg')";
    imgPrincipalUno.classList.remove("borderProductoMain");
    imgPrincipalDos.classList.remove("borderProductoMain");
    imgPrincipalTres.classList.remove("borderProductoMain");
    imgPrincipalCuatro.classList.remove("borderProductoMain");
    imgPrincipalCinco.classList.add("borderProductoMain");
    imgPrincipalSeis.classList.remove("borderProductoMain");
});
imgPrincipalSeis.addEventListener("mousemove", function() {
    cambiarImagenPrincipal("img/auriculares1-6.jpg");
    magnifier.style.backgroundImage = "url('img/auriculares1-6.jpg')";
    imgPrincipalUno.classList.remove("borderProductoMain");
    imgPrincipalDos.classList.remove("borderProductoMain");
    imgPrincipalTres.classList.remove("borderProductoMain");
    imgPrincipalCuatro.classList.remove("borderProductoMain");
    imgPrincipalCinco.classList.remove("borderProductoMain");
    imgPrincipalSeis.classList.add("borderProductoMain");
});
// End imege little

// Esto es para las estrellas
var numeroDeEstrellas = 4.3;
let numberEstrella = document.getElementById("numberEstrella");
let numberEstrellaDivs = document.getElementById("numberEstrellaDivs");
let estrellas = [
    document.getElementById("etrellaUno"),
    document.getElementById("etrellaDos"),
    document.getElementById("etrellaTres"),
    document.getElementById("etrellaCuatro"),
    document.getElementById("etrellaCinco")
];
let estrellasDos = [
    document.getElementById("etrellaUnoDivs"),
    document.getElementById("etrellaDosDivs"),
    document.getElementById("etrellaTresDivs"),
    document.getElementById("etrellaCuatroDivs"),
    document.getElementById("etrellaCincoDivs")
]
// Asegurar que la calificación esté en el rango de 0 a 5
numeroDeEstrellas = Math.min(Math.max(numeroDeEstrellas, 0), 5);
numberEstrella.innerText = numeroDeEstrellas;
numberEstrellaDivs.innerText = numeroDeEstrellas;

for (let i = 0; i < estrellas.length; i++) {
    estrellas[i].classList.remove("fa-regular", "fa-solid", "fa-star", "fa-star-half-stroke");
    estrellasDos[i].classList.remove("fa-regular", "fa-solid", "fa-star", "fa-star-half-stroke");

    if (i < Math.floor(numeroDeEstrellas)) {
        estrellas[i].classList.add("fa-solid", "fa-star");
        estrellasDos[i].classList.add("fa-solid", "fa-star");
    } else if (i === Math.floor(numeroDeEstrellas) && numeroDeEstrellas % 1 !== 0) {
        estrellas[i].classList.add("fa-regular", "fa-star-half-stroke");
        estrellasDos[i].classList.add("fa-regular", "fa-star-half-stroke");
    } else {
        estrellas[i].classList.add("fa-regular", "fa-star");
        estrellasDos[i].classList.add("fa-regular", "fa-star");
    }
}
// End of the star

// Para visualizar el contenedor de la informacion de la calificación global
let star = document.getElementById("star");
let calificacionGlobal = document.getElementById("calificacionGlobal");

star.addEventListener("mousemove", function() {
    calificacionGlobal.style.display = "flex";
    actualizarBarras();
    window.addEventListener('scroll', () => {
        actualizarBarras();
    })
});
calificacionGlobal.addEventListener("mousemove", function() {
    calificacionGlobal.style.display = "flex";
});
star.addEventListener("mouseleave", function () {
    calificacionGlobal.style.display = "none";
});
calificacionGlobal.addEventListener("mouseleave", function () {
    calificacionGlobal.style.display = "none";
});
// Fin para lo de la clificación global

// Relleno de las barras de calificacion
const number5 = 68254;
const number4 = 15512;
const number3 = 8273;
const number2 = 4137;
const number1 = 7239;

// Las barras del primer conjunto
let barraStar5 = document.getElementById("barraStar5");
let barraStar4 = document.getElementById("barraStar4");
let barraStar3 = document.getElementById("barraStar3");
let barraStar2 = document.getElementById("barraStar2");
let barraStar1 = document.getElementById("barraStar1");

let textBarra5 = document.getElementById("textBarra5");
let textBarra4 = document.getElementById("textBarra4");
let textBarra3 = document.getElementById("textBarra3");
let textBarra2 = document.getElementById("textBarra2");
let textBarra1 = document.getElementById("textBarra1");

// Las barras del segundo conjunto
let barraInterior5 = document.querySelector(".barra-interior-5");
let barraInterior4 = document.querySelector(".barra-interior-4");
let barraInterior3 = document.querySelector(".barra-interior-3");
let barraInterior2 = document.querySelector(".barra-interior-2");
let barraInterior1 = document.querySelector(".barra-interior-1");

let textBarraGlobal5 = document.getElementById("textBarraGlobal5");
let textBarraGlobal4 = document.getElementById("textBarraGlobal4");
let textBarraGlobal3 = document.getElementById("textBarraGlobal3");
let textBarraGlobal2 = document.getElementById("textBarraGlobal2");
let textBarraGlobal1 = document.getElementById("textBarraGlobal1");

function actualizarBarras() {
    // Grafica 5
    let valorTotalCalificacion = number5 + number4 + number3 + number2 + number1;
    numberStar5 = (number5 * 100 / valorTotalCalificacion);
    barraStar5.style.width = numberStar5.toString() + "%";
    textBarra5.innerText = numberStar5.toFixed() + "%";

    // Grafica 4
    numberStar4 = (number4 * 100 / valorTotalCalificacion);
    barraStar4.style.width = numberStar4.toString() + "%";
    textBarra4.innerText = numberStar4.toFixed() + "%";

    // Grafica 3
    numberStar3 = (number3 * 100 / valorTotalCalificacion);
    barraStar3.style.width = numberStar3.toString() + "%";
    textBarra3.innerText = numberStar3.toFixed() + "%";

    // Grafica 2
    numberStar2 = (number2 * 100 / valorTotalCalificacion);
    barraStar2.style.width = numberStar2.toString() + "%";
    textBarra2.innerText = numberStar2.toFixed() + "%";

    // Grafica 1
    numberStar1 = (number1 * 100 / valorTotalCalificacion);
    barraStar1.style.width = numberStar1.toString() + "%";
    textBarra1.innerText = numberStar1.toFixed() + "%";
}

// Llama a la función para inicializar las barras

// end of the bars

// Para la lupa y Para el texto que aparece debajo del producto
const imageContainer = document.querySelector('#producto');
const magnifier = document.querySelector('.magnifier');
const originalImage = document.getElementById('original-image');
let textProducto = document.getElementById("textProducto");

imageContainer.addEventListener('mousemove', (e) => {
    const containerRect = imageContainer.getBoundingClientRect();
    const offsetX = e.clientX - containerRect.left;
    const offsetY = e.clientY - containerRect.top;
    const backgroundX = (offsetX / imageContainer.offsetWidth) * 100;
    const backgroundY = (offsetY / imageContainer.offsetHeight) * 100;

    magnifier.style.backgroundPosition = `${backgroundX}% ${backgroundY}%`;
    magnifier.style.display = 'block';

    textProducto.innerText = "Haz click para ampliar el contenedor madal";
});
imageContainer.addEventListener('mousemove', (e) => {
    cordenadas.style.left = e.clientX - cordenadas.offsetWidth / 0.86 + 'px';
    cordenadas.style.top = e.clientY - cordenadas.offsetHeight / 0.47 + 'px';
    cordenadas.style.display = 'block';
});
imageContainer.addEventListener('mouseleave', () => {
    magnifier.style.display = 'none';
    cordenadas.style.display = 'none';
    textProducto.innerText = "Pasa el mause encima de la imagen para aplicar zoom";
});
// End of the lupa, y para lo del texto que aparece debajo del texto

// Para que funcione los divs de las imagenes con precios como un hover
let textColor1 = document.getElementById("textColor1");
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
    var color =  "Naranja";
    originalImage.setAttribute("src","img/auriculares3.jpg");
    textColor1.innerText = color;
}
function contentImg() {
    var color =  "Azul";
    originalImage.setAttribute("src","img/auriculares1.jpg");
    textColor1.innerText = color;
}

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

auriculares1.addEventListener('mouseleave', function(){
    contentImg();
    auriculares1.style.borderColor = "#FF8F00";
    auriculares2.style.borderColor = "#D5D9D9";
    auriculares3.style.borderColor = "#D5D9D9";
});
auriculares2.addEventListener('mouseleave', function(){
    contentImg();
    auriculares1.style.borderColor = "#FF8F00";
    auriculares2.style.borderColor = "#D5D9D9";
    auriculares3.style.borderColor = "#D5D9D9";
});
auriculares3.addEventListener('mouseleave', function(){
    contentImg();
    auriculares1.style.borderColor = "#FF8F00";
    auriculares2.style.borderColor = "#D5D9D9";
    auriculares3.style.borderColor = "#D5D9D9";
});
// End of divs of the imeges with the price how hover

// Para que funcione los divs de las imagenes con precios al darle click
let textColor2 = document.getElementById("textColor2");
let containerProducUno = document.getElementById("containerProducUno");
let containerProducDos = document.getElementById("containerProducDos");
let containerProducTres = document.getElementById("containerProducTres");
let containerProductoMainUno = document.getElementById("containerProductoMainUno");
let containerProductoMainDos = document.getElementById("containerProductoMainDos");
let containerProductoMainTres = document.getElementById("containerProductoMainTres");
let porcentajeDescuento = document.getElementById("porcentajeDescuento");
let precioUno = document.getElementById("precioUno");
let precioDos = document.getElementById("precioDos");

function contentArticleUno() {
    var color = "Azul";
    var porcentaje = "-35 %";
    var precio = 'US$<j class="number-valor">25</j>99';

    containerProducUno.style.display = "block";
    containerProducDos.style.display = "none";
    containerProducTres.style.display = "none";
    containerProductoMainUno.style.display = "flex";
    containerProductoMainDos.style.display = "none";
    containerProductoMainTres.style.display = "none";

    textColor1.innerText = color;
    textColor2.innerText = color;
    porcentajeDescuento.innerText = porcentaje;
    precioUno.innerHTML = precio;
    precioDos.innerHTML = precio;
    auriculares1.style.borderColor = "#FF8F00";
    auriculares2.style.borderColor = "#D5D9D9";
    auriculares3.style.borderColor = "#D5D9D9";
}
function contentArticleDos() {
    var color = "Purpura";
    var porcentaje = "-10 %";
    var precio = 'US$<j class="number-valor">35</j>99';

    containerProducUno.style.display = "none";
    containerProducDos.style.display = "block";
    containerProducTres.style.display = "none";
    containerProductoMainUno.style.display = "none";
    containerProductoMainDos.style.display = "flex";
    containerProductoMainTres.style.display = "none";

    textColor1.innerText = color;
    textColor2.innerText = color;
    porcentajeDescuento.innerText = porcentaje;
    precioUno.innerHTML = precio;
    precioDos.innerHTML = precio;
    auriculares1.style.borderColor = "#D5D9D9";
    auriculares2.style.borderColor = "#FF8F00";
    auriculares3.style.borderColor = "#D5D9D9";
}
function contentArticleTres() {
    var color = "Naranja";
    var porcentaje = "-13 %";
    var precio = 'US$<j class="number-valor">34</j>99';

    containerProducUno.style.display = "none";
    containerProducDos.style.display = "none";
    containerProducTres.style.display = "block";
    containerProductoMainUno.style.display = "none";
    containerProductoMainDos.style.display = "none";
    containerProductoMainTres.style.display = "flex";

    textColor1.innerText = color;
    textColor2.innerText = color;
    porcentajeDescuento.innerText = porcentaje;
    precioUno.innerHTML = precio;
    precioDos.innerHTML = precio;
    auriculares1.style.borderColor = "#D5D9D9";
    auriculares2.style.borderColor = "#D5D9D9";
    auriculares3.style.borderColor = "#FF8F00";
}

auriculares1.addEventListener('click', function(){
    contentArticleUno();
});
auriculares2.addEventListener('click', function(){
    contentArticleDos();
});
auriculares3.addEventListener('click', function(){
    contentArticleTres();
});
// Fin de las funciones para los divs de las imagenes con los precios
