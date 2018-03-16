

function ciagFibonacciego(n) {
    var wynik;
    if (n==0){ 
        wynik=0;
    } else if(n==1){
        wynik = 1;
    } else {
        var x=0, y=1;
        for( var i = 0; i<n-1; i++){
            wynik = x + y;
            x=y;
            y=wynik;
        }    
    }
    return wynik;
}

console.log(ciagFibonacciego(15));

