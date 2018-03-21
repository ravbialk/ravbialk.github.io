$(function() {
  $("#count-sum").click(function(){  
    var suma = 0;
$(".salary").each (function(){  
  console.log($(this).text());
  
  suma += Number($( this ).text());   

});

console.log(suma);


$('#sum').html(suma);  
});
});