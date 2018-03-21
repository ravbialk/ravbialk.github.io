//$(function() {
//  
//
//  $("div").css({'width': "200px", 
//                'height': "200px", 
//                backgroundColor: "red"});
//  
//  function animacja() {
//        $("div").animate({backgroundColor: "blue"}, 5000, function(){
//         $(this).html("<h2> Animacja zakończona. </h2>"); 
//        });
//     
//    }
//  
//  $("button").click(function() {
//     $("div").animate({'width': "100px",
//                      'height': "100px",
//                      'margin-left': "100px"}, 3000, animacja);
//  });
//  
//});


$(document).ready(function () {
    $('#button').click(function () {
        $('#div').animate({
                width: '100px',
                height: '100px',
                marginLeft: '100px'
            }, 3000, zmianaKoloru)
    })
});

function zmianaKoloru() {
    setTimeout(napis,5000)
    $('#div').css({
        'background-color': 'blue',
        'transition': '5s'
    });
}

function napis() {
        $('h2').html('Animacja zakończona').css({
        fontSize: '20px',
        
    });
}
