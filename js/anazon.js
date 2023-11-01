// Precio del produto 1
let valorProducto1 = 435000;
let valorProducto2 = 400000;
let valorProducto3 = 430000;
let valorProducto4 = 420000;

let auxValorProducto = new Intl.NumberFormat("de-DE").format(valorProducto1);
document.getElementById('precioProducto').innerHTML = auxValorProducto;



// Para seleccionar la imagen
let productoImgUno = document.getElementById("productoImgUno");
let productoImgDos = document.getElementById("productoImgDos");
let productoImgTres = document.getElementById("productoImgTres");
let productoImgCuatro = document.getElementById("productoImgCuatro");
let producto= document.getElementById("producto");

productoImgUno.addEventListener('click', function() {
    productoImgUno.style.borderColor = '#F00';
    productoImgDos.style.borderColor = '#9F9F9F';
    productoImgTres.style.borderColor = '#9F9F9F';
    productoImgCuatro.style.borderColor = '#9F9F9F';

    let auxValorProducto = new Intl.NumberFormat("de-DE").format(valorProducto1);
    document.getElementById('precioProducto').innerHTML = auxValorProducto;
});
productoImgDos.addEventListener('click', function() {
    productoImgUno.style.borderColor = '#9F9F9F';
    productoImgDos.style.borderColor = '#F00';
    productoImgTres.style.borderColor = '#9F9F9F';
    productoImgCuatro.style.borderColor = '#9F9F9F';

    let auxValorProducto = new Intl.NumberFormat("de-DE").format(valorProducto2);
    document.getElementById('precioProducto').innerHTML = auxValorProducto;
});
productoImgTres.addEventListener('click', function() {
    productoImgUno.style.borderColor = '#9F9F9F';
    productoImgDos.style.borderColor = '#9F9F9F';
    productoImgTres.style.borderColor = '#F00';
    productoImgCuatro.style.borderColor = '#9F9F9F';

    let auxValorProducto = new Intl.NumberFormat("de-DE").format(valorProducto3);
    document.getElementById('precioProducto').innerHTML = auxValorProducto;
});
productoImgCuatro.addEventListener('click', function() {
    productoImgUno.style.borderColor = '#9F9F9F';
    productoImgDos.style.borderColor = '#9F9F9F';
    productoImgTres.style.borderColor = '#9F9F9F';
    productoImgCuatro.style.borderColor = '#F00';

    let auxValorProducto = new Intl.NumberFormat("de-DE").format(valorProducto4);
    document.getElementById('precioProducto').innerHTML = auxValorProducto;
});