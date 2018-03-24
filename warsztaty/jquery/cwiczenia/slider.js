$ (function() {
    var slideShow = $(".slide-show");
    var slideCount = $(".single-slide").length;
    var slideWidth = 100/slideCount;
    var slideIndex = 0;
    
    // ustawiam szerokość .slide-show
    
    slideShow.css('width',slideCount*100 + '%');
    //slideShow.css({width : slideCount + '00%'});
    
    //ustalam każdy slajd w odpowiednim miejscu i nadaję właściwą szerokosć
    
    slideShow.find(".single-slide").each(function(index) {
        $(this).css({
            'width':slideWidth + "%", // lub width bez ''
            'margin-left': index * slideWidth + "%" }); // lub marginLeft
    })
    
    // funkcja ze strzałkami - podpięcie funkcji na kliknięciu
     $('.prev-slide').click(function(){
        slide(slideIndex-1);
        
    })
    
       
       $('.next-slide').click(function(){
        slide(slideIndex+1);
        
    });
    
    
    // funkcja odpowiadająca za przesuwanie 'kliszy'
    
    function slide(newSlideIndex){
    if (newSlideIndex<0 || newSlideIndex>(slideCount-1));
    return;
     
    var slideCaption = slideShow.find('.slide-caption').eq(newSlideIndex);  
        slideCaption.hide();
    var newMarginLeft = (newSlideIndex * (-100)) + '%';
    slideShow.animate({'margin-left': newMarginLeft}, 800, function(){
        slideIndex=newSlideIndex;
        slideCaption.fadeIn();
    }); 
    
};
    
    
    });
    
    

    