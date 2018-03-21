


$(function() {
  
 $('#ostatniNaPierwszy').click( function(){
    $("p:first").before($("p:last"));
  });
  
  
  $("#pierwszyNaOstatni").click( function(){
    $("p:last").after($("p:first"));
  });
  
});
