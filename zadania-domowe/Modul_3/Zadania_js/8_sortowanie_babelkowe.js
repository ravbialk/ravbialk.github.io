

var tablica = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

console.log(tablica);

function sortowanieBabelkowe(tablica){
    var zmiana;
    var babel;
  do {
    zmiana = false;
    for (var i = 0; i < tablica.length - 1; i++) {
      if (tablica[i + 1] < tablica[i]) {
        babel = tablica[i];
        tablica[i] = tablica[i + 1];
        tablica[i + 1] = babel;
        zmiana = true;
      }
    }
  } while (zmiana);
  return tablica;
}

console.log(sortowanieBabelkowe(tablica));

