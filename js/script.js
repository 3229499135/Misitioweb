date = new Date();
year = date.getFullYear();
month = date.getMonth()+1;
day = date.getDate();
document.getElementById("date").innerHTML = "Dia de consulta "+day+" / "+month+" / "+year;


/* let tarbajos = document.getElementById("tarbajos");
let practicas = document.getElementById("practicas");
let menuUno = document.querySelector("ul");

tarbajos.addEventListener("click", function() {
  menuUno.classList.add("menu-1");
  menuUno.classList.remove("menu-1-1");
});
practicas.addEventListener("click", function() {
  menuUno.classList.remove("menu-1");
  menuUno.classList.add("menu-1-1");
  menuUno.classList.remove("menu-2");
  menuUno.classList.add("menu-2-2");
}); */