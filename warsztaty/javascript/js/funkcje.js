// funkcja bez parametrów
function wyswietlWKonsoli () {
    console.log( "Adam Nowacki");
}

wyswietlWKonsoli ();

// funcja z parametrami

function wyswietlWKonsoliParam(imie, nazwisko){
    console.log( imie +" " + nazwisko );
}
wyswietlWKonsoliParam ("Adam", "Nowacki");
wyswietlWKonsoliParam ("Katarzyna", "Izak");
wyswietlWKonsoliParam ("Kinga", "Korycka");
wyswietlWKonsoliParam ("Adrian", "Bak");

//zwracanie wartości przez funkcje

function obliczPodatek( kwota, procentPodatek){
    var wynik = kwota * (procentPodatek/100);
    return wynik.toFixed(2);
}

var obliczenia1 = obliczPodatek (4990, 23);
console.log ("Wysokość obliczonego podatku wynosi: " + obliczenia1);


function wyswietlWynik (wartosc) {
    document.write(wartosc);
}

var obliczenia = obliczPodatek (1000, 10);
wyswietlWynik (obliczenia);