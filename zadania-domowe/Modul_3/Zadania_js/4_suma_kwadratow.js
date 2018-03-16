

var tablica = [0,1,2,3,4,5];

function sumaKwadratow(tablica) {
  
  var suma = 0;
  
  for (var i = 0; i < tablica.length; i++){
    
  suma += Math.pow(tablica[i], 2)
  
  }
  console.log('Suma kwadratów: ' + suma);
  return suma;
}

sumaKwadratow(tablica);