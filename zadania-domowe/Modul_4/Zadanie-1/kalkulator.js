

function wynikDzialania(){
  var x = document.getElementById('ekran').value;
  document.getElementById('ekran').value = eval(x);
}

function pokazZnak(x) {
  document.getElementById('ekran').value += x;
}

function wyczysc() {
  document.getElementById("ekran").value = ' ';
}