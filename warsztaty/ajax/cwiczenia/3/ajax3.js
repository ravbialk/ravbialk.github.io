//var waiting = false, endScrollHandle;
//
//$(window).on( 'scroll' , function() {
//    if (waiting) {
//        return;
//    }
//    waiting = true;
//    clearTimeout(endScrollHandle);
//
//    console.log('Scrolowanie');
//
//    setTimeout(function () {
//        waiting = false;
//    }, 100);
//
//    endScrollHandle = setTimeout(function () {
//        console.log('Scrolowanie');
//    }, 200);
//});


//var scrollTimer;
//
//$(window).on( 'scroll' , function() {
//    if (scrollTimer) {
//        clearTimeout(scrollTimer);
//    }
//
//    scrollTimer = setTimeout(function() {
//	console.log( 'Scrollowanie' );
//    }, 100);
//});


object .onscroll = function () {myscript }; Koniec strony 




//
//
//
//function wrzucDaneDoHtml (dane){
//    
//    var pUserId = document.createElement('p');
//    var pUserName = document.createElement('p');
//    var pUserUrl = document.createElement('p');
//    var pUserIdContent = document.createTextNode ("userId: " + dane.userId);
//    var pUserNameContent=document.createTextNode("userName: " + dane.userName);
//    var pUserUrlContent = document.createTextNode("userUrl: "+ dane.userURL)   
//    
//
//
//pUserId.appendChild(pUserIdContent);
//pUserName.appendChild(pUserNameContent);
//pUserUrl.appendChild(pUserUrlContent);
//
//document.body.appendChild(pUserId);
//document.body.appendChild(pUserName);
//document.body.appendChild(pUserUrl);
//}


//    
//$.getJSON(
//"https://jsonplaceholder.typicode.com/users", wrzucDaneDoHtml);
//
//
//$.getJSON(
//"http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
//function (data) {
//// wyswietl w konsoli
//console.log(data);
//}
//);