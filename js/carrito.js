let boxMinus = document.getElementById("boxMinus");
let boxCantidad = document.getElementById("boxCantidad");
let boxPlus = document.getElementById("boxPlus");
let valorProducto = 237000000;
let subtotal = document.getElementById('subtotal');
let numerosPoductos = document.getElementById('numerosPoductos');

let auxValorProducto = new Intl.NumberFormat("de-DE").format(valorProducto);
document.getElementById('precioUnidad').innerHTML = auxValorProducto;


boxPlus.addEventListener("click", function() {
    let auxCant = boxCantidad.innerHTML;
    if(auxCant < 10) {
        auxCant++;
        boxCantidad.innerHTML = auxCant;
        determinarSingularPlural(auxCant);
        calcularSubtotal();
    }
});

 boxMinus.addEventListener("click", function() {
    let auxCant = boxCantidad.innerHTML;
    if(auxCant > 0) {
        auxCant--;
        boxCantidad.innerHTML = auxCant;
        determinarSingularPlural(auxCant);
        calcularSubtotal();
    }
});

function calcularSubtotal() {
    let auxCant = valorProducto * Number(boxCantidad.innerHTML);
    let auxCantMil = Intl.NumberFormat("de-DE").format(auxCant);
    document.getElementById('subtotal').innerHTML = "$"+auxCantMil;
}
function determinarSingularPlural(auxCant) {
    if (auxCant == 1) {
        numerosPoductos.innerHTML = "("+auxCant+" Productos)";
    }
    else if ((auxCant == 0) || auxCant > 1) {
        numerosPoductos.innerHTML = "("+auxCant+" Productos)";
    }
}