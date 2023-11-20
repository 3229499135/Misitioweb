// Precio del produto 1 al producto 4
let valorProducto1 = 435000;
let valorProducto2 = 430000;
let valorProducto3 = 420000;
let auxValorProducto = new Intl.NumberFormat("de-DE").format(valorProducto1);
let auxValorProducto2 = new Intl.NumberFormat("de-DE").format(valorProducto2);
let auxValorProducto3 = new Intl.NumberFormat("de-DE").format(valorProducto3);
document.getElementById('precioProducto').innerHTML = auxValorProducto;

document.getElementById('precioProductoDivsUno').innerHTML = auxValorProducto;
document.getElementById('precioProductoDivsDos').innerHTML = auxValorProducto2;
document.getElementById('precioProductoDivsTres').innerHTML = auxValorProducto3;

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

// Función para manejar eventos de mousemove
/* function cambiarImagenPrincipal(src) {
    originalImage.setAttribute("src", src);
} */

const imgPrincipalUno = document.getElementById('productoImgMainUno');
const imgPrincipalDos = document.getElementById('productoImgMainDos');
const imgPrincipalTres = document.getElementById('productoImgMainTres');
const imgPrincipalCuatro = document.getElementById('productoImgMainCuatro');
const imgPrincipalCinco = document.getElementById('productoImgMainCinco');
const imgPrincipalSeis = document.getElementById('productoImgMainSeis');
const originalImage = document.getElementById('original-image');

imgPrincipalUno.addEventListener("mousemove", function() {
    originalImage.setAttribute("src","img/auriculares1.jpg");
    originalImage.style.backgroundImage.setAttribute('url','img/auriculares1.jpg');
});
imgPrincipalDos.addEventListener("mousemove", function() {
    originalImage.setAttribute("src","img/auriculares1-2.jpg");
    originalImage.style.backgroundImage.setAttribute('url','img/auriculares1-2.jpg');
});
imgPrincipalTres.addEventListener("mousemove", function() {
    originalImage.setAttribute("src","img/auriculares1-3.jpg");
});
imgPrincipalCuatro.addEventListener("mousemove", function() {
    originalImage.setAttribute("src","img/auriculares1-4.jpg");
});
imgPrincipalCinco.addEventListener("mousemove", function() {
    originalImage.setAttribute("src","img/auriculares1-5.jpg");
});
imgPrincipalSeis.addEventListener("mousemove", function() {
    originalImage.setAttribute("src","img/auriculares1-6.jpg");
});


// Para la lupa
const imageContainer = document.querySelector('#producto');
const magnifier = document.querySelector('.magnifier');

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



/* let auriculares2 = document.getElementById('auriculares2');

auriculares2.addEventListener('click', function(){
    let color1 = 'Blanco';
    let text = document.getElementById('text1');
    let text2 = document.getElementById('text2');

    
    text2.innerText = texto.color1;
}) */