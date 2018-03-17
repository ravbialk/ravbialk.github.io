// dodawanie elementów

// pobieram istniejący węzeł o id output

var istniejacyWezel = document.getElementById("output");

// sprawdzam czy udało sie go pobrać

//console.log(istniejacyWezel);

// tworzę nowy element w html

var newElement = document.createElement("p");

// tworzę treść do paragrafu

var newElementContent = document.createTextNode ("Tutaj tworzę treść paragrafu o!");

// wstawiam nowoutworzony tekst do nowoutworzonego paragrafu

newElement.appendChild(newElementContent);

// Dodaje do paragrafu atrybut class= 'text'
newElement.setAttribute('class','text');

//console.log(newElement);
 
// wstawiam Nasz przygotowany paragraf do div#output

istniejacyWezel.appendChild(newElement);


// usuwanie elementów z dokumentu

//istniejacyWezel.parentElement.removeChild(istniejacyWezel); // I sposób 

//document.getElementById("parFirst").removeChild(istniejacyWezel); // II sposób


// inserBefore

var link = document.getElementsByClassName('superlink')[0];
var br = document.createElement("br");
link.parentElement.insertBefore(br, link);

// usuwanie atrybutow


link.removeAttribute('class');


