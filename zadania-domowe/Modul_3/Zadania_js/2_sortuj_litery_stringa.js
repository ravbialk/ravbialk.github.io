
function sortowanie(string){
 console.log(string);

var zamienWTablice = (string.split(''));

var posortowana = zamienWTablice.sort();

var zamienWString = posortowana.join("");

  return zamienWString;
}

var wynik = sortowanie("Akademia108");
console.log(wynik);

