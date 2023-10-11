let boxMinus = document.getElementById("boxMinus");
let boxCantidad = document.getElementById("boxCantidad");
let boxPlus = document.getElementById("boxPlus");
let valorProducto = 2000000;
let auxValorProducto = new Intl.NumberFormat("de-DE").format(valorProducto);
document.getElementById('precioUnidad').innerHTML = auxValorProducto;
let subtotal = document.getElementById('subtotal');

boxPlus.addEventListener("click", function() {
    let auxCant = boxCantidad.innerHTML;
    if(auxCant < 10) {
        auxCant++;
        boxCantidad.innerHTML = auxCant;
        total = auxValorProducto * boxCantidad;
        if (isNaN(total)) {
            subtotal.innerHTML = total;
        }
    }
});

 boxMinus.addEventListener("click", function() {
    let auxCant = boxCantidad.innerHTML;
    if(auxCant > 0) {
        auxCant--;
        boxCantidad.innerHTML = auxCant;
    }
});