let containerProducUno = document.getElementById("containerProducUno");
let containerProducDos = document.getElementById("containerProducDos");
let containerProducTres = document.getElementById("containerProducTres");
let containerProductoMainUno = document.getElementById("containerProductoMainUno");
let containerProductoMainDos = document.getElementById("containerProductoMainDos");
let containerProductoMainTres = document.getElementById("containerProductoMainTres");
let magnifierUno = document.getElementById("magnifierUno");
let magnifierDos = document.getElementById("magnifierDos");
let magnifierTres = document.getElementById("magnifierTres");

let text1 = document.getElementById("text1");
let textColor1 = document.getElementById("textColor1");
let textMarca = document.getElementById("textMarca");
let textModelo = document.getElementById("textModelo");
let textColor2 = document.getElementById("textColor2");
let textFactorForma = document.getElementById("textFactorForma");
let textInfoArticulo = document.getElementById("textInfoArticulo");
let tecnologiaConectiva = document.getElementById("tecnologiaConectividad");

const originalImage = document.getElementById('original-image');

let contentDos1 = document.getElementById('contentDos1');
let contentDos2 = document.getElementById('contentDos2');
let contentDos3 = document.getElementById('contentDos3');

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
}

function contentArticleUno() {
    var color =  "Azul";

    containerProducUno.style.display = "block";
    containerProducDos.style.display = "none";
    containerProducTres.style.display = "none";
    containerProductoMainUno.style.display = "flex";
    containerProductoMainDos.style.display = "none";
    containerProductoMainTres.style.display = "none";
    magnifierUno.style.backgroundImage = "url('img/auriculares1,jpg')";

    textColor1.innerText = color;
}

function contentArticleDos() {
    var color =  "Morado";
    
    containerProducUno.style.display = "none";
    containerProducDos.style.display = "block";
    containerProducTres.style.display = "none";
    containerProductoMainUno.style.display = "none";
    containerProductoMainDos.style.display = "flex";
    containerProductoMainTres.style.display = "none";
    magnifierDos.style.backgroundImage = "url('img/auriculares2.jpg')";
    
    textColor1.innerText = color;
}

function contentArticleTres() {
    var color =  "Camo";
    
    containerProducUno.style.display = "none";
    containerProducDos.style.display = "none";
    containerProducTres.style.display = "block";
    containerProductoMainUno.style.display = "none";
    containerProductoMainDos.style.display = "none";
    containerProductoMainTres.style.display = "flex";
    magnifierTres.style.backgroundImage = "url('img/auriculares3.jpg')";

    textColor1.innerText = color;
}