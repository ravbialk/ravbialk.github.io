
var jsonOsoby = {
    "pracownicy": [
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},   
        {"firstName": "Piotr", "lastName": "Żmuda"}, 
    ]
}

jsonOsoby.pracownicy.forEach( function(element, index){
console.log(element.firstName+ " "+ element.lastName);
});





