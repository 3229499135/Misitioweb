date = new Date();
year = date.getFullYear();
month = date.getMonth()+1;
day = date.getDate();
document.getElementById("date").innerHTML = "Fecha de consulta "+day+" / "+month+" / "+year;


let tarbajos = document.getElementById("tarbajos");
let practicas = document.getElementById("practicas");

tarbajos.addEventListener("click", function() {
  let menuUno = document.getElementById("menuUno");
  let menuDos = document.getElementById("menuDos");
  
  menuUno.style.display = 'block';
  menuDos.style.display = 'none';
});
practicas.addEventListener("click", function() {
  let menuUno = document.getElementById("menuUno");
  let menuDos = document.getElementById("menuDos");

  menuUno.style.display = 'none';
  menuDos.style.display = 'block';
});