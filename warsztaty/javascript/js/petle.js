// Pętle //Iteracja - jeden obrót pętli

//for( var i = 1; i<=10; i++){
//    console.log("Iteracja nr " + i);  
//}


// length - liczy ilości warunków z tablicy

var tablica = ["Volvo", "Mazda", "Honda", "Audi"];
//var dlugoscTablicy = tablica.length;
//for (var i=0;i<dlugoscTablicy; i++){
 //   console.log(tablica[i]);
//}

// pętla forEach

//tablica.forEach (function(element, index) {
//                 console.log("Index: " + index + "Element: " + element);
//                 } );


//var iter= 1;
//while (iter <= 25) {
//    console.log ("While iteracja nr " + iter);
//    iter ++;
//}

//var iter= 1;
//do {
//    console.log ("While iteracja nr " + iter);
//    iter ++;
//} while (iter <=25)
    
    

// break i continue

//for(var i=1; i< 15; i++){
//    if (i>6) { 
//        break;
//             } else {
//                 console.log("Obrót pętli nr " + i);
//             }
//}
    
for(var i=1; i< 15; i++){
    if (i==4 || i==6 || i==10) { 
       continue;
             } else {
                 console.log("Iteracjai nr " + i);
             }
}
  