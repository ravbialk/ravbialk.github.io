
class Ksiazka {
    constructor(tytul, autor, Boolean) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = Boolean; 
    }
opiszKsiazke() {
          
          if (this.przeczytana === true) {
          console.log('Książka ma tytuł ' + this.tytul + ', autorem jest ' + this.autor + ' i została przeczytana.');
          }
          else {
            console.log('Książka ma tytuł ' + this.tytul + ', autorem jest ' + this.autor + ' i nie została przeczytana.');
          }
        }
}

var wiedzmin = new Ksiazka('Wiedźmin', 'Andrzej Sapkowski', true);
var mock = new Ksiazka('Mock', 'Marek Krajewski', false);
var syn = new Ksiazka('Syn', 'Joe Nesbo', false);

var ksiazki = [wiedzmin, mock, syn];

function iloscPrzeczytanych () {
  var iloscKsiazekPrzeczytanych = 0;
  
  for (var i=0; i<ksiazki.length; i++) {
    if (ksiazki[i].przeczytana===true) {
      iloscKsiazekPrzeczytanych += ksiazki[i].przeczytana;
      ksiazki[i].opiszKsiazke();
    } else {
      ksiazki[i].opiszKsiazke();
    }
  }
  return(iloscKsiazekPrzeczytanych);
}

var wynikFunkcji = iloscPrzeczytanych(ksiazki);
console.log("Ilosć książek przeczytanych to " +wynikFunkcji);
wynikFunkcji