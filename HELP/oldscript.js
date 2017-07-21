$(document).ready(function(){
			
'use strict';


/*Плавный скроллинг*/
$('a[href^="#"]').bind('click.smoothscroll',function (e) { 
   e.preventDefault(); 

   var target = this.hash, 
   $target = $(target); 

   $('html, body').stop().animate({ 
   'scrollTop': $target.offset().top 
   }, 1500, 'swing', function () { 
   window.location.hash = target; 
   }); 
});






/*Маска для телефона*/
$('#dillers__tel').mask("+38(999) 999-99-99");
$('#wincall_tel').mask("+38(999) 999-99-99");
$('#wincalcul_tel').mask("+38(999) 999-99-99");



// Accordeon

	$(function() {
		$('.why__accordeon__title').click(function() {
			
			$('.why__accordeon__title span').html('+');
			if($(this).hasClass('why__accordeon__title-active')) {
				$(this).removeClass('why__accordeon__title-active');
				$(this).next().slideUp();
			} 
			
			else {
				$('.why__accordeon__text').slideUp();
				$('.why__accordeon__title').removeClass('why__accordeon__title-active');
				$(this).addClass('why__accordeon__title-active');
				$(this).children('span').html('-');
				$(this).next().slideDown();
			}
		});
	});


//Slider

$('.colors__slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 7,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
 
  ]
});
			



$('.prtech__slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 7,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }

  ]
});	
			



//responds slider


$('.responds__slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
}); 





//Modal window call

    $('#call').click(function(){
       $('.wincall__overlay').show(500);
       $('.wincall').show(500);
    });


    $('.wincall__close').click(function(){
       $('.wincall__overlay').hide(500);

    });


    $(".wincall__overlay").click(function(e) {

        if($(e.target).closest(".wincall").length==0) {
             $(".wincall").hide(500);
             $(".wincall__overlay").hide(500);
        } 

    });




//Modal window calculate

    $("#calculate_but1").click(function(){
       $(".wincalcul__overlay").show(500);
       $(".wincalcul").show(500);
    });


    $("#calculate_but2").click(function(){
      $(".wincalcul__overlay").show(500);
      $(".wincalcul").show(500);
    });


    $(".wincalcul__close").click(function(){
       $(".wincalcul__overlay").hide(500);

    });


    $(".wincalcul__overlay").click(function(e) {

        if($(e.target).closest(".wincalcul").length==0) {
             $(".wincalcul").hide(500);
             $(".wincalcul__overlay").hide(500);
        } 

    });


    


});		
						
