// Tablice

var imiona = ['Adam', 'Marta', 'Paweł', 'Michał', 'Kasia', 'Sandra'];

// dowawanie elementów na końcu tablicy
imiona[6]= 'Mikołaj';
imiona[7]= 'Kinga';

imiona.push("Kamil", "Krzysztof", "Anna");
imiona.push("Marcin")

//usuwanie elementów z końca tablicy
imiona.pop();

//dodawanie elementów tablicy na początku

imiona.unshift("Sebastian");
imiona.unshift("Małgosia");

// usuwanie elementów z początku tablicy (pierwszy element)

imiona.shift();


console.log(imiona);

// sprawdzenie "długości" tablicy

var iloscElementówTablicy = imiona.length;
//console.log(iloscElementówTablicy);

// robijanie tablicy na ciąg tekstowy - metoda join


//var elementyTablicyString = imiona.join();
var elementyTablicyString = imiona.join(", ");

//console.log(elementyTablicyString);

//"odwrócenie tablicy"

imiona.reverse ();
//console.log(imiona);

// sortowanie tablicy

imiona.sort();
//console.log(imiona);

//sprawdzenie czy wartość w tablicy istnieje

console.log(imiona.indexOf("Sandra"));








