

function ksiazka 
   (tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
    this.przeczytana = przeczytana;
    this.opiszKsiazke = function() {
        if (przeczytana) {
            var check = "przeczytana";
        } else {
            var check = "nieprzeczytana";
        }
       
        var a = ("Książka ma tytuł " + this.tytul + " ,autorem jest " + this.autor + " i została " + check);
        return a;
    }
}
 var wiedzmin = new ksiazka("Wiedzmin", "Andzrzej Sapkowski", true);
 function iloscPrzeczytanych(tablicaKsiazek) {
    var suma = 0;
    for (var i = 0; i < tablicaKsiazek.length; i++) {
        console.log('iteracja elementow tablicy nr ' + i);
        console.log(tablicaKsiazek[i].opiszKsiazke());
        if (tablicaKsiazek[i].przeczytana === true) {
            suma = suma + 1;
        }
    }
    return suma;
}


var naszaSzkapa = new ksiazka("Nasza szkapa", "Konopnicka", true);

var potop = new ksiazka("Potop", "Sienkiewicz", false);

var dziady = new ksiazka("Dziady", "Mickiewicz", false);
console.log('suma przeczytanych ksiazek wynosi: ' + iloscPrzeczytanych(tablicaKsiazek));