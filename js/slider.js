// Para la funcionalidad de los botones de siguiente y anterior.
let boxSlider = document.getElementById("boxSlider");
let iconChevronLeft = document.getElementById("iconChevronLeft");
let iconChevronRight = document.getElementById("iconChevronRight");
let signal1 = document.getElementById("signal1");
let signal2 = document.getElementById("signal2");
let signal3 = document.getElementById("signal3");
let signal4 = document.getElementById("signal4");

iconChevronRight.addEventListener("click", function() {
  if(boxSlider.classList.contains("box-slider-1")) {
    boxSlider.classList.remove("box-slider-1");
    boxSlider.classList.add("box-slider-2");
    signal1.classList.remove("signal-select");
    signal2.classList.add("signal-select");
  }
  else if(boxSlider.classList.contains("box-slider-2")) {
    boxSlider.classList.remove("box-slider-2");
    boxSlider.classList.add("box-slider-3");
    signal2.classList.remove("signal-select");
    signal3.classList.add("signal-select");
  }
  else if(boxSlider.classList.contains("box-slider-3")) {
    boxSlider.classList.remove("box-slider-3");
    boxSlider.classList.add("box-slider-4");
    signal3.classList.remove("signal-select");
    signal4.classList.add("signal-select");
  }
});

iconChevronLeft.addEventListener("click", function() {
  if(boxSlider.classList.contains("box-slider-4")) {
    boxSlider.classList.remove("box-slider-4");
    boxSlider.classList.add("box-slider-3");
    signal4.classList.remove("signal-select");
    signal3.classList.add("signal-select");
  }
  else if(boxSlider.classList.contains("box-slider-3")) {
    boxSlider.classList.remove("box-slider-3");
    boxSlider.classList.add("box-slider-2");
    signal3.classList.remove("signal-select");
    signal2.classList.add("signal-select");
  }
  else if(boxSlider.classList.contains("box-slider-2")) {
    boxSlider.classList.remove("box-slider-2");
    boxSlider.classList.add("box-slider-1");
    signal2.classList.remove("signal-select");
    signal1.classList.add("signal-select");
  }
});

// Para que el slider sea automatico.
// Este es funcional
document.addEventListener("DOMContentLoaded", function () {
  var currentSlide = 0;
  var slides = document.querySelectorAll(".box-slider .box");
  var totalSlides = slides.length;

  function showSlide(slideNumber) {
    slides[currentSlide].style.left = "100%";
    slides[slideNumber].style.left = "0";
    currentSlide = slideNumber;
  }

  function nextSlide() {
    var nextSlideIndex = (currentSlide + 1) % totalSlides;
    showSlide(nextSlideIndex);
  }

  function previousSlide() {
    var previousSlideIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(previousSlideIndex);
  }

  // Iniciar el slider automático
  var autoSlideInterval = setInterval(nextSlide, 3000);

    // Detener el slider automático al pasar el mouse por encima
  var boxSlider = document.getElementById("boxSlider");
  boxSlider.addEventListener("mouseenter", function () {
    clearInterval(autoSlideInterval);
  });

  // Reanudar el slider automático al retirar el mouse
  boxSlider.addEventListener("mouseleave", function () {
    autoSlideInterval = setInterval(nextSlide, 3000);
  });

  // Agregar eventos a los iconos de flecha
  var iconChevronLeft = document.getElementById("iconChevronLeft");
  var iconChevronRight = document.getElementById("iconChevronRight");

  iconChevronLeft.addEventListener("click", previousSlide);
  iconChevronRight.addEventListener("click", nextSlide);
});





// Este es funcional
/* $(document).ready(function () {
    var currentSlide = 0;
    var totalSlides = $(".box-slider .box").length;

    function showSlide(slideNumber) {
        $(".box-slider .box").css("left", "100%");
        $(".box-slider .box").eq(slideNumber).css("left", "0");
        $(".signal").removeClass("signal-select");
        $(".signal").eq(slideNumber).addClass("signal-select");
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    // Iniciar el slider automático
    var autoSlideInterval = setInterval(nextSlide, 3000);

    // Detener el slider automático al pasar el mouse por encima
    $(".box-slider").mouseenter(function () {
        clearInterval(autoSlideInterval);
    });

    // Reanudar el slider automático al retirar el mouse
    $(".box-slider").mouseleave(function () {
        autoSlideInterval = setInterval(nextSlide, 3000);
    });
}); */



// Este es funcional
/* var currentSlide = 1;
var totalSlides = $(".box-slider > .box").length;

function showSlide(slideNumber) {
  $(".box-slider > .box").hide();
  $(".box-slider > .box:nth-child(" + slideNumber + ")").show();

  // Actualiza el indicador de señal
  $(".signal").removeClass("signal-select");
  $("#signal" + slideNumber).addClass("signal-select");
}

function nextSlide() {
  currentSlide++;
  if (currentSlide > totalSlides) {
      currentSlide = 1;
  }
  showSlide(currentSlide);
}

// Iniciar el slider automático
var autoSlideInterval = setInterval(nextSlide, 3000); */





// Este es funcional
/* let boxslider = document.getElementById('boxSlider');
let currentSlider = 1;
let totalSlaider = 4;
let autoSlaiderInterval;

function changeSlide(direction) {
  if(direction === "next") {
    currentSlider = (currentSlider % totalSlaider) + 1;
  } else {
    currentSlider = (currentSlider - 2 + totalSlaider) % totalSlaider + 1;
  }

  let newClass = `box-slider-${currentSlider}`;
  boxslider.className = 'box-slider';
  boxslider.classList.add(newClass);
}

function startAutoSlider() {
  autoSlaiderInterval = setInterval(function() {
    changeSlide('next');
  }, 5000);
}

startAutoSlider(); */







/* setTimeout(cambiarSlider, 3000);

iconChevronRight.addEventListener("click", function() {
  cambiarSlider();
  setTimeout(cambiarSlider, 3000);
});
  
iconChevronLeft.addEventListener("click", function() {
  cambiarSlider();
  setTimeout(cambiarSlider, 3000);
}); */

/* 
var img = ["box-slider-1", "box-slider-2", "box-slider-3", "box-slider-4"];
var currenImg = 0;
var counter = 1;
function imgs() {
  currenImg++;
  if (currenImg >= img.length) {
    currenImg = 0;
  }
  document.getElementById("signal" + counter).classList.add("signal-select");
  counter++;
  if(counter > 4) {
    counter = 1;
  }

  boxSlider.classList.add(img[currenImg]);
  setTimeout(imgs, 5000);
};

imgs(); */