// Relleno de las barras de calificación
const number5 = document.getElementById("number5");
const number4 = document.getElementById("number4");
const number3 = document.getElementById("number3");
const number2 = document.getElementById("number2");
const number1 = document.getElementById("number1");

// Las barras
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

function actualizarBarras() {
    // Grafica 5
    let valorTotalCalificacion = parseInt(number5.value) + parseInt(number4.value) + parseInt(number3.value) + parseInt(number2.value) + parseInt(number1.value);
    let numberStar5 = (number5.value * 100 / valorTotalCalificacion);
    barraStar5.style.width = numberStar5.toString()+"%";
    textBarra5.innerText = numberStar5.toFixed()+"%";

    // Grafica 4
    let numberStar4 = (number4.value * 100 / valorTotalCalificacion);
    barraStar4.style.width = numberStar4.toString()+"%";
    textBarra4.innerText = numberStar4.toFixed()+"%";
    
    // Grafica 3
    let numberStar3 = (number3.value * 100 / valorTotalCalificacion);
    barraStar3.style.width = numberStar3.toString()+"%";
    textBarra3.innerText = numberStar3.toFixed()+"%";
    
    // Grafica 2
    let numberStar2 = (number2.value * 100 / valorTotalCalificacion);
    barraStar2.style.width = numberStar2.toString()+"%";
    textBarra2.innerText = numberStar2.toFixed()+"%";
    
    // Grafica 1
    let numberStar1 = (number1.value * 100 / valorTotalCalificacion);
    barraStar1.style.width = numberStar1.toString()+"%";
    textBarra1.innerText = numberStar1.toFixed()+"%";
}

// Agregar eventos "input" a cada input
number5.addEventListener("input", actualizarBarras);
number4.addEventListener("input", actualizarBarras);
number3.addEventListener("input", actualizarBarras);
number2.addEventListener("input", actualizarBarras);
number1.addEventListener("input", actualizarBarras);
