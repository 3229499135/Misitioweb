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
let imgProducto = document.getElementById('imgProducto');

productoImgUno.addEventListener('click', function() {
    imgProducto.setAttribute("src","img/auriculares1.jpg");
    productoImgUno.style.borderColor = '#F00';
    productoImgDos.style.borderColor = '#9F9F9F';
    productoImgTres.style.borderColor = '#9F9F9F';
    productoImgCuatro.style.borderColor = '#9F9F9F';

    let auxValorProducto = new Intl.NumberFormat("de-DE").format(valorProducto1);
    document.getElementById('precioProducto').innerHTML = auxValorProducto;
});
productoImgDos.addEventListener('click', function() {
    imgProducto.setAttribute("src","img/auriculares2.jpg");
    productoImgUno.style.borderColor = '#9F9F9F';
    productoImgDos.style.borderColor = '#F00';
    productoImgTres.style.borderColor = '#9F9F9F';
    productoImgCuatro.style.borderColor = '#9F9F9F';

    let auxValorProducto = new Intl.NumberFormat("de-DE").format(valorProducto2);
    document.getElementById('precioProducto').innerHTML = auxValorProducto;
});
productoImgTres.addEventListener('click', function() {
    imgProducto.setAttribute("src","img/auriculares3.jpg");
    productoImgUno.style.borderColor = '#9F9F9F';
    productoImgDos.style.borderColor = '#9F9F9F';
    productoImgTres.style.borderColor = '#F00';
    productoImgCuatro.style.borderColor = '#9F9F9F';

    let auxValorProducto = new Intl.NumberFormat("de-DE").format(valorProducto3);
    document.getElementById('precioProducto').innerHTML = auxValorProducto;
});
productoImgCuatro.addEventListener('click', function() {
    imgProducto.setAttribute("src","img/auriculares4.jpg");
    productoImgUno.style.borderColor = '#9F9F9F';
    productoImgDos.style.borderColor = '#9F9F9F';
    productoImgTres.style.borderColor = '#9F9F9F';
    productoImgCuatro.style.borderColor = '#F00';

    let auxValorProducto = new Intl.NumberFormat("de-DE").format(valorProducto4);
    document.getElementById('precioProducto').innerHTML = auxValorProducto;
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