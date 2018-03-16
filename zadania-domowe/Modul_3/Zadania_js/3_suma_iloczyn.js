function suma (tablica = [1,2,3,4,5,6]) {
var suma = 0;
for(var i = 0; i < tablica.length; i++) { 
  suma = suma + tablica[i]; 
}
console.log('Suma: ' + suma);

var iloczyn = 1;
for(var x = 0; x < tablica.length; x++) { 
  iloczyn = iloczyn * tablica[x]; 
}
console.log('Iloczyn: ' + iloczyn);
}
suma ();