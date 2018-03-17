var paragraf = document.getElementById("par2");

// sposób I

//function obsluzZdarzenie(event) {
//   // console.log("click");
//      console.log(event.type);
//}
//
//paragraf.onclick = obsluzZdarzenie; // na końcu nie dajemy nawiasów.
//
//
//// II sposób
//
//paragraf.onclick = function(e) {
//    console.log("Do obsługi zdarzenia przypisywana funkcja anonimowa");
//}

// III sposób
//var counter = 0;
//paragraf.addEventListener("mouseenter", function(event){
//                          counter++;
//                          console.log (event.type);
//                          console.log("Zdarzenie wywołane" +counter + " raz ");
//                          });


//var title = document.getElementById("main-header");
//title.addEventListener("mouseenter", function() {
//    title.style.fontSize = "70px";
//    
//});
//
//title.addEventListener("mouseleave", function() {
//     title.style.fontSize = "20px";
//});


//function bodyColor (event) {
//    console.log(event);
//    document.body.style.backgroundColor = "red";
//    
//}
//
//var title = document.getElementById("main-header");
//
//title.addEventListener("click", bodyColor);

// usuwanie obsługi zdarzeń

//title.removeEventListener("click", bodyColor);


// blokowanie domyślnego działania elementów


//document.querySelector('.link1').addEventListener('click', function (event) {
//            event.preventDefault ();
//            console.log("Kliknąłem link klasy .link1");
//});


 






