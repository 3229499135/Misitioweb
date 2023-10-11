date = new Date();
year = date.getFullYear();
month = date.getMonth()+1;
day = date.getDate();
document.getElementById("date").innerHTML = "Fecha de consulta "+day+" / "+month+" / "+year;


let trabajos = document.getElementById("trabajos");
let practicas = document.getElementById("practicas");

trabajos.addEventListener("click", function() {
  let menuUno = document.getElementById("menuUno");
  let menuDos = document.getElementById("menuDos");
  let buscar1 = document.getElementById('buscar1');
  let buscar2 = document.getElementById('buscar2');
  
  menuUno.style.display = 'block';
  menuDos.style.display = 'none';
  trabajos.style.backgroundColor = 'rgb(110, 110, 150)';
  practicas.style.backgroundColor = 'rgb(140, 140, 190)';
  buscar1.style.display = 'block';
  buscar2.style.display = 'none';
});
document.getElementById('sear1').addEventListener('keyup', function() {
  var input = this.value.toLowerCase();
  var items = document.getElementById('menuUno').getElementsByTagName('li');

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
  trabajos.style.backgroundColor = 'rgb(140, 140, 190)';
  practicas.style.backgroundColor = 'rgb(110, 110, 150)'
  buscar1.style.display = 'none';
  buscar2.style.display = 'block';
});
document.getElementById('sear2').addEventListener('keyup', function() {
  var input = this.value.toLowerCase();
  var items = document.getElementById('menuDos').getElementsByTagName('li');

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