// I sposób
function wyswietl (znak) {
  document.getElementById("ekran").value += znak
  
}

function wynik() {
  var ekran = document.getElementById("ekran").value;
  document.getElementById("ekran").value = eval(ekran);
}

function wyczysc() {
document.getElementById("ekran").value = " ";}


//II sposób

var button = document.getElementById('button');
var cyfry = document.getElementsByClassName('cyfra');
var operacje = document.getElementsByClassName('opercaja');
var wynik = document.getElementsByClassName('rownasie');
var wyczysc = document.getElementsByClassName('wyczysc');
var ekran = document.getElementById('ekran');


function addValue(num) {
	ekran.value += num;
	
	if (num == wyczysc) {
	  ekran.value === '';
	}
	
	if( num == wynik) {
	  ekran.value == eval(ekran.value);
	}
}
