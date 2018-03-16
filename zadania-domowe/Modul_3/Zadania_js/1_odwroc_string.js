
function odwrocenie(string){
  var napis = "";
  for(var i = string.length-1; i>=0; i--){
      napis += string[i];
  }
  return napis;
}

var wynik = odwrocenie("Akademia108");
console.log(wynik);