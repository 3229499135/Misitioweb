let boxSlider = document.getElementById("boxSlider");
let iconChevronRight = document.getElementById("iconChevronRight");
let iconChevronLeft = document.getElementById("iconChevronLeft");
let signal1 = document.getElementById("signal1");
let signal2 = document.getElementById("signal2");
let signal3 = document.getElementById("signal3");
let signal4 = document.getElementById("signal4");

iconChevronRight.addEventListener("click", function() {
    if (boxSlider.classList.contains("box-slide-1")) {
        boxSlider.classList.remove("box-slide-1");
        boxSlider.classList.add("box-slide-2");
        signal1.classList.remove("signal-select");
        signal2.classList.add("signal-select");
    }
    else if (boxSlider.classList.contains("box-slide-2")) {
        boxSlider.classList.remove("box-slide-2");
        boxSlider.classList.add("box-slide-3");
        signal2.classList.remove("signal-select");
        signal3.classList.add("signal-select");
    }
    else if (boxSlider.classList.contains("box-slide-3")) {
        boxSlider.classList.remove("box-slide-3");
        boxSlider.classList.add("box-slide-4");
        signal3.classList.remove("signal-select");
        signal4.classList.add("signal-select");
    }
})

iconChevronLeft.addEventListener("click", function() {
    if (boxSlider.classList.contains("box-slide-4")) {
        boxSlider.classList.remove("box-slide-4");
        boxSlider.classList.add("box-slide-3");
        signal4.classList.remove("signal-select");
        signal3.classList.add("signal-select");
    }
    else if (boxSlider.classList.contains("box-slide-3")) {
        boxSlider.classList.remove("box-slide-3");
        boxSlider.classList.add("box-slide-2");
        signal3.classList.remove("signal-select");
        signal2.classList.add("signal-select");
    }
    else if (boxSlider.classList.contains("box-slide-2")) {
        boxSlider.classList.remove("box-slide-2");
        boxSlider.classList.add("box-slide-1");
        signal2.classList.remove("signal-select");
        signal1.classList.add("signal-select");
    }
});