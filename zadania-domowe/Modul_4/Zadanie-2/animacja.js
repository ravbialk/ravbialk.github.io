$(function() {
  

  
  $("div").css({'width': "200px", 
                'height': "200px", 
                backgroundColor: "red"});
  
  function animacja() {
        $("div").animate({backgroundColor: "blue"}, 5000, function(){
         $(this).html("<p> Animacja zakończona </p>"); 
        });
     
    }
  
  $("button").click(function() {
     $("div").animate({'width': "100px",
                      'height': "100px",
                      'margin-left': "100px"}, 3000, animacja);
  });
  
});