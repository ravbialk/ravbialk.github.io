

function oblicz() {
  var wplata = parseInt(document.getElementById("wplata").value);
  var iloscLat = parseInt(document.getElementById("ilosc-lat").value);
  var okresKapitalizacji = parseInt(document.getElementById("okres-kapitalizacji").value);  
  var oprocentowanie = parseInt(document.getElementById("oprocentowanie").value)/100;
  var podatek = document.getElementById("podatek").checked;
    
    var wynik = obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek);
    
    document.getElementById("wynik").innerHTML=wynik; // dodanie wyniku w HTML
}

/* Oblicznie zysku z lokaty */

    function obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek){
    
        // oprocentowanieOpodatkowane = podatek ? opodatkowanie * 0.81: oprocentowanie; - inne zapisanie poniższego warunku
        
    if(podatek ==true) {
        var oprocentowanieOpodatkowane = oprocentowanie - (oprocentowanie*19/100);
    } else {
        var oprocentowanieOpodatkowane = oprocentowanie;
    }
        
        var kapital = wplata*Math.pow((1+(oprocentowanieOpodatkowane / okresKapitalizacji)),iloscLat * okresKapitalizacji);
        return kapital.toFixed(2);
}

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   