/* Meses */
let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

/* Para la fecha de la consulta */
date = new Date();
year = date.getFullYear();
month = meses[date.getMonth()];
day = date.getDate();
document.getElementById("date").innerHTML = "Fecha de consulta: "+day+" de "+month+" de "+year;

/* Para los botones de los trabajos */
let trabajos = document.getElementById("trabajos");
let practicas = document.getElementById("practicas");

trabajos.addEventListener("click", function() {
  let menuUno = document.getElementById("menuUno");
  let menuDos = document.getElementById("menuDos");
  let buscar1 = document.getElementById('buscar1');
  let buscar2 = document.getElementById('buscar2');
  menuUno.style.display = 'block';
  menuUno.style.display = 'grid';
  menuDos.style.display = 'none';
  trabajos.style.backgroundColor = 'rgb(110, 110, 150)';
  practicas.style.backgroundColor = 'rgb(140, 140, 190)';
  buscar1.style.display = 'block';
  buscar2.style.display = 'none';
});
document.getElementById('sear1').addEventListener('keyup', function() {
  var input = this.value.toLowerCase();
  var items = document.getElementById('menuUno').getElementsByTagName('div');
  for(var i = 0; i < items.length; i++) {
    var item = items[i];
    var text = item.textContent || item.innerHTML;

    if(text.toLowerCase().indexOf(input) > -1) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  }
});

practicas.addEventListener("click", function() {
  let menuUno = document.getElementById("menuUno");
  let menuDos = document.getElementById("menuDos");
  let buscar1 = document.getElementById('buscar1');
  let buscar2 = document.getElementById('buscar2');
  menuUno.style.display = 'none';
  menuDos.style.display = 'block';
  menuDos.style.display = 'grid';
  trabajos.style.backgroundColor = 'rgb(140, 140, 190)';
  practicas.style.backgroundColor = 'rgb(110, 110, 150)'
  buscar1.style.display = 'none';
  buscar2.style.display = 'block';
});
document.getElementById('sear2').addEventListener('keyup', function() {
  var input = this.value.toLowerCase();
  var items = document.getElementById('menuDos').getElementsByTagName('div');
  for(var i = 0; i < items.length; i++) {
    var item = items[i];
    var text = item.textContent || item.innerHTML;

    if(text.toLowerCase().indexOf(input) > -1) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  }
});

/* Para la hora */
setInterval(function() {
  var date = new Date();
  var second = date.getSeconds();
  var minute = date.getMinutes();
  var hour = date.getHours();

  /* if (hour>=12) {
    hour = hour-12
  } */

  document.getElementById('hora').innerText = hour+":"+minute+":"+second;
});

/* Para la seccion de los proyectos */
VanillaTilt.init(document.querySelectorAll(".card-container"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 0.7
});

/* Para la seccion de los contactos */
let collapsibles = document.querySelectorAll('.faq-container');

collapsibles.forEach(element => {
  element.addEventListener("click", () =>{
    element.querySelector('.faq-answer').classList.toggle('open');
    element.querySelector('.name').classList.toggle('active');
    element.querySelector('.arrow-container').classList.toggle('up');
  })
});