let boxSlider = document.getElementById("boxSlider");
let iconchevronRight = document.getElementById("iconchevronRight");
let iconChevronLeft = document.getElementById("iconChevronLeft");

iconchevronRight.addEventListener.apply("click", function() {
    if (boxSlider.classList.contains("box-slide-1")) {
        boxSlider.classList.remove("box-slide-1");
        boxSlider.classList.add("box-slide-2");
    }
    else if (boxSlider.classList.contains("box-slide-2")) {
        boxSlider.classList.remove("box-slide-2");
        boxSlider.classList.add("box-slide-3");
    }
    else if (boxSlider.classList.contains("box-slide-3")) {
        boxSlider.classList.remove("box-slide-3");
        boxSlider.classList.add("box-slide-4");
    }
})

boxSlider.addEventListener("click", function() {
    if (boxSlider.classList.contains("box-slide-1")) {
        boxSlider.classList.remove("box-slide-1");
        boxSlider.classList.add("box-slide-2");
    }
    else if (boxSlider.classList.contains("box-slide-2")) {
        boxSlider.classList.remove("box-slide-2");
        boxSlider.classList.add("box-slide-3");
    }
    else if (boxSlider.classList.contains("box-slide-3")) {
        boxSlider.classList.remove("box-slide-3");
        boxSlider.classList.add("box-slide-4");
    }
});