// metoda find wyszukuje potomków selektora. W poniższym przykładzie poszuka paragrafów znajdujących siew  div.
// metoda find mozsze wyszukać po tagu, klasie, id, atrybucie.

$("div").find("p").css({fontSize:"60px", color: "deeppink"});

// metoda each - jako parametr przyjmuje funkcję zwrotną, która zostanie wykonana na każdym znalezionym elemencie.

$("p").each(function(index, element){
    console.log(index, element);
    $(this).addClass('new_class').css({fontSize: "40px", backgroundColor:"yellow"});
});

