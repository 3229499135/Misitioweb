// Precio del produto 1 al producto 4
let valorProducto1 = 435000;
let valorProducto2 = 400000;
let valorProducto3 = 430000;
let valorProducto4 = 420000;
let auxValorProducto = new Intl.NumberFormat("de-DE").format(valorProducto1);
document.getElementById('precioProducto').innerHTML = auxValorProducto;

// Para visualizar el contenedor modal
let producto = document.getElementById("producto");
let btnX = document.getElementById("btnX");
let despregable = document.getElementById('despregable');

producto.addEventListener('click', function() {
    despregable.style.visibility = 'visible';
});
btnX.addEventListener('click', function() {
    despregable.style.visibility = 'hidden';
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

// Para la lupa
const imageContainer = document.querySelector('#producto');
const magnifier = document.querySelector('.magnifier');
const originalImage = document.getElementById('original-image');

imageContainer.addEventListener('mousemove', (e) => {
    const containerRect = imageContainer.getBoundingClientRect();
    const offsetX = e.clientX - containerRect.left;
    const offsetY = e.clientY - containerRect.top;

    const backgroundX = (offsetX / imageContainer.offsetWidth) * 120;
    const backgroundY = (offsetY / imageContainer.offsetHeight) * 130;

    magnifier.style.backgroundPosition = `${backgroundX}% ${backgroundY}%`;
    magnifier.style.left = e.clientX - magnifier.offsetWidth / 0.89 + 'px';
    magnifier.style.top = e.clientY - magnifier.offsetHeight / 1.15 + 'px';
    magnifier.style.display = 'block';
});
imageContainer.addEventListener('mouseleave', () => {
    magnifier.style.display = 'none';
});