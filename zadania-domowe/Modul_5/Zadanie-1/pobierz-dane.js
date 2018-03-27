
function pobierzDane(e) {
    e.preventDefault();
    
$.getJSON(
"https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", wrzucDaneDoHtml)
  
}


    
function wrzucDaneDoHtml(dane) {
    

$('div').append("<p> Imię: "+ dane.imie + "</p>");
$('div').append("<p> Nazwisko: "+ dane.nazwisko + "</p>");
$('div').append("<p> Zawód: "+ dane.zawod + "</p>");
$('div').append("<p> Firma: "+ dane.firma + "</p>");

    

}
