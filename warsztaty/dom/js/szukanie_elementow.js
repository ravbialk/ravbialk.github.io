//pobranie elementu po id - tylko jeden element
// parametr w getElementById bez #

var parFirst = document.getElementById("parFirst");
//console.log(parFirst);

// pobranie elementów po klasie - kolekcja elementów
//parametr w getElemntsByClassName bez .

var elementLink = document.getElementsByClassName("link");
//console.log(elementLink);
//console.log(elementLink.length);

//pobranie elementów po tagu:

var elementTag = document.getElementsByTagName("p");
//console.log(elementTag);

// pobranie wszystkich elementów po selektorze .superlink - tutaj niezbędne jest podanie selektora klasy, jeśli pobieramy klasy lub jeśli pobieramy po id

var elementSuperlink = document.querySelectorAll(".superlink");
//console.log(elementSuperlink);


// pobranie elementu po selektorze id

var parSecond = document.querySelector("#parSecond");
//console.log(parSecond);


var mojeLinki = document.querySelectorAll (".link");
//console.log (mojeLinki[1]); //odwołanie się do linku nr 2

// metoda z pętlą 1

//for (var i=0; i<mojeLinki.length;i++){
//    console.log("To mój link nr " + (i+1));
//    console.log(mojeLinki[i]);
//    console.log ("-------------")
//}

// metoda z pętlą 2 - pętla foEach działa na kolekcji pobranej za pomocą metody document.querySelectorAll()

mojeLinki.forEach (function(element, index){
    console.log(element);
                   });