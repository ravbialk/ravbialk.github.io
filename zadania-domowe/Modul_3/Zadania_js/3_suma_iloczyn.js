function suma (tablica = [1,2,3,4,5,6]) {
var suma = 0;
var iloczyn = 1;    
    
for(var i = 0; i < tablica.length; i++) { 
  suma = suma + tablica[i];
 iloczyn = iloczyn * tablica[i]    
}
console.log('Suma: ' + suma);
console.log('Iloczyn: ' + iloczyn);
}
suma ();
    
