// document.ready gwarantuje, że skrypty wywołają się w momencie gdy cały model DOM jest juz załadowany
// poniżej skrócony zapis document.ready
$(function(){
    
//    $(".title").css({color: "red", backgroundColor:"yellow"}); //I wersja
//    $("h2").css({color: "red", backgroundColor:"yellow"}); // II wersja
    $("[class='title']").css({color: "red", backgroundColor:"yellow"}); // III wersja - po klasie
    
});


