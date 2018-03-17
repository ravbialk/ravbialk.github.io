// inner HTML - pobieranie

var parFirst = document.getElementById("parFirst");
//console.log(parFirst.innerHTML);
console.log(parFirst.outerHTML);


// inner HTML - przypisanie wartości

var mainHeader = document.querySelector("h1");
mainHeader.innerHTML = "<span> Nowa zawartość h1 wstawiona w span</span>";

// zmiana styli
mainHeader.style.color = "red";


// przypisanie klasy

mainHeader.className = "headingtext";

// pobranie klas elementu

console.log(mainHeader.className);


// class List

mainHeader.classList.add("nowa-klasa");

// classList usuwanie klasy

mainHeader.classList.remove("headingtext");