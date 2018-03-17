var parFirst = document.getElementById("parFirst");

// pobieram rodzica dla elementu #parFirst za pomocą właściwości parentElemnt
//console.log(parFirst.parentElement);

// childNodes pobiera wszystkie węzły w tym także baiłe znaki między elementami jako "text" oraz komentarze
//console.log(parFirst.childNodes);

// children pobiera tylko te węzły, które są elementem html
//console.log(parFirst.children);

// pobieram pierwsze dziecko elementu #parFirst

var pierwszeDziecko = parFirst.children [0];
//console.log(pierwszeDziecko);
 // pobieram następny węzeł dla pierwszeDziecko, który jest elementem w relacji rodzeństwo.

//console.log(pierwszeDziecko.nextElementSibling);

// pobiera następny węzeł dla pierwszeDziecko niezależnie czy jest elementem html, textem czy komentarzem.

//console.log(pierwszeDziecko.nextSibling);


// lastChild pobiera ostatnie dziecko elementu niezależnie czy jest elelmentem html, textem czy komentarzem.
//var ostatnieDziecko = parFirst.lastChild;
//console.log(ostatnieDziecko);

// lastElementChild pobiera ostatnie dziecko, które jest elelemntem html.

var ostatnieDziecko = parFirst.lastElementChild;
//console.log(ostatnieDziecko);
console.log(ostatnieDziecko.previousElementSibling);

