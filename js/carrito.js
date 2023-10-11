let boxMinus = document.getElementById("boxMinus");
let boxCantidad = document.getElementById("boxCantidad");
let boxPlus = document.getElementById("boxPlus");
let valorProducto = 2000000;
let auxValorProducto = new Intl.NumberFormat("de-DE").format(valorProducto);
document.getElementById('precioUnidad').innerHTML = auxValorProducto;


boxPlus.addEventListener("click", function() {
    let auxCant = boxCantidad.innerHTML;
    if(auxCant < 10) {
        auxCant++;
        boxCantidad.innerHTML = auxCant;
        calcularSubtotal();
    }
});

 boxMinus.addEventListener("click", function() {
    let auxCant = boxCantidad.innerHTML;
    if(auxCant > 0) {
        auxCant--;
        boxCantidad.innerHTML = auxCant;
        calcularSubtotal();
    }
});

function calcularSubtotal() {
    let auxCant = boxCantidad.innerHTML;
    document.getElementById('subtotal').innerHTML = valorProducto * Number(boxCantidad.innerHTML);
}