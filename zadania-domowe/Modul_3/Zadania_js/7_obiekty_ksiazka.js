//
//class Ksiazka {
//    constructor(tytul, autor, Boolean) {
//        this.tytul = tytul;
//        this.autor = autor;
//        this.przeczytana = Boolean; 
//    }
//opiszKsiazke() {
//          
//          if (this.przeczytana === true) {
//          console.log('Książka ma tytuł ' + this.tytul + ', autorem jest ' + this.autor + ' i została przeczytana.');
//          }
//          else {
//            console.log('Książka ma tytuł ' + this.tytul + ', autorem jest ' + this.autor + ' i nie została przeczytana.');
//          }
//        }
//}
//
//var wiedzmin = new Ksiazka('Wiedźmin', 'Andrzej Sapkowski', true);
//var mock = new Ksiazka('Mock', 'Marek Krajewski', false);
//var syn = new Ksiazka('Syn', 'Joe Nesbo', false);
//
//var ksiazki = [wiedzmin, mock, syn];
//
//function iloscPrzeczytanych () {
//  var iloscKsiazekPrzeczytanych = 0;
//  
//  for (var i=0; i<ksiazki.length; i++) {
//    if (ksiazki[i].przeczytana===true) {
//      iloscKsiazekPrzeczytanych += ksiazki[i].przeczytana;
//      ksiazki[i].opiszKsiazke();
//    } else {
//      ksiazki[i].opiszKsiazke();
//    }
//  }
//  return(iloscKsiazekPrzeczytanych);
//}
//
//var wynikFunkcji = iloscPrzeczytanych(ksiazki);
//console.log("Ilosć książek przeczytanych to " +wynikFunkcji);
//wynikFunkcji
//
//


function Ksiazka(tytul, autor, Boolean) {
    this.tytul = tytul,
    this.autor = autor,
    this.przeczytana = Boolean,
    
  this.opiszKsiazke = function(){
      if(this.przeczytana === false){
    return ("Książka ma tytuł " + this.tytul + ", autorem jest " + this.autor + " i nie została przeczytana");
  } else{
    return ("Książka ma tytuł " + this.tytul + ", autorem jest " + this.autor + " i została przeczytana");
  }
  };
}

var wiedzmin = new Ksiazka ('Wiedźmin', 'Andrzej Sapkowski', false);
var mock = new Ksiazka ('Mock', 'Marek Krajewski', false);
var syn = new Ksiazka ('Syn', 'Joe Nesbo', true);

var ksiazkiAll = [wiedzmin, mock, syn];

//console.log(ksiazkiAll);

function iloscPrzeczytanych() {
 var liczbaPrzeczytanych = 0;
 ksiazkiAll.forEach(function(element) {
    if(element.przeczytana){
     liczbaPrzeczytanych += 1;
   }
    console.log(element.opiszKsiazke());
  });
  console.log("ilość przeczytanych książek to " + liczbaPrzeczytanych);
  }
  
  iloscPrzeczytanych(ksiazkiAll);


