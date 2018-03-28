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
    
    
$(function(){

  

  var allSliders = $('.single-slide').length;

  

  var slideWidth = $('.single-slide').width();

  

  var currentSlide = $('.active-slide');

    

  currentSlide.next().css('transform', 'translate3d('+slideWidth+'px, 0px, 0px)');

  currentSlide.prev().css('transform', 'translate3d(-'+slideWidth+'px, 0px, 0px)');



  $('a.next-slide').click(function () {

        currentSlide = $('.active-slide');

        var currentSlideIndex = currentSlide.index('.single-slide');

      console.log(currentSlide);

    

        currentSlide.animate({

          'borderSpacing': slideWidth

        }, {

            step: function (now, fx) {

                $(this).css({"transform": 'translate3d('+ now +'px, 0px, 0px)'});

            },

            duration: 200,

            easing: 'linear',

            queue: false,



        }, 'linear').removeClass('active-slide');



    

      if (currentSlideIndex == allSliders-1) {

        

        $( '.single-slide:first-child' ).animate({

          'borderSpacing': '0'

        }, {

            step: function (now, fx) {

                $(this).css({"transform": 'translate3d('+ now +'px, 0px, 0px)'}); //do rozkimy czemu nie działa

            },

            duration: 1000,

            easing: 'linear',

            queue: false,



        }, 'linear').addClass('active-slide');

        

        

      } else {

        

        currentSlide.prev().animate({

          'borderSpacing': '0'

        }, {

            step: function (now, fx) {

                $(this).css({"transform": 'translate3d('+ now +'px, 0px, 0px)'}); //do rozkimy czemu nie działa

            },

            duration: 1000,

            easing: 'linear',

            queue: false,



        }, 'linear').addClass('active-slide');

    

      }

      

    });

  

  $('a.prev-slide').click(function () {

        var currentSlide = $('.active-slide');

        var currentSlideIndex = currentSlide.index('.single-slide');



        if (currentSlideIndex == allSliders-1) {

          currentSlide.animate({left: -slideWidth}, 200).removeClass('active-slide').removeAttr('style');

          $('.single-slide:first-child').addClass('active-slide').css('right', -slideWidth).animate({right: 0}, 200);

          

        } else {

          currentSlide.removeClass('active-slide').animate({right: -slideWidth}, 200).removeAttr('style').next().addClass('active-slide').css('right', -slideWidth).animate({right: 0}, 200);

        }   

    });





});
    