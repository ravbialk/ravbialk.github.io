

function pobierzImie (event) {
    event.preventDefault();
    var inputs = document.getElementsByTagName ("input");
    var imie = inputs[0].value;
    var nazwisko = inputs[1].value;
    
    console.log("Imię: " + imie + "\nNazwisko: " + nazwisko);
}

