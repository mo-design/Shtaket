//Установка начальных переменных

var kolvo = 0;   // количество штакетин
var pogmet = 0;  // количество погонных метров
var calc = 0;    // общая стоимость
var dist_x = {};
var price = {};
dist_x['oneside'] = 0.047;
dist_x['twoside'] = 0.09;
price['cover1'] = 22.00;
price['cover2'] = 25.00;
price['cover3'] = 24.00;
price['cover4'] = 28.02;
price['cover5'] = 30.70;
price['cover6'] = 32.00;

var l = 0;
var h = 0;
var x = 0;
var face = '';
var face_text = '';
var cover = '';
var cover_text = '';


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



/*Выход div*/


$('#pluses').viewportChecker({
    classToAdd: 'animated_fast fadeInUp',
    offset: 100
});



$('#a_product').viewportChecker({
    classToAdd: 'animated fadeIn',
    offset: 100
});




$('#facing').viewportChecker({
    classToAdd: 'animated fadeIn',
    offset: 100
});


$('#design').viewportChecker({
    classToAdd: 'animated fadeIn',
    offset: 100
});


$('#a_works').viewportChecker({
    classToAdd: 'animated fadeIn',
    offset: 100
});


$('#a_manufact').viewportChecker({
    classToAdd: 'animated_fast fadeInUp',
    offset: 100
});

$('#a_dillers').viewportChecker({
    classToAdd: 'animated fadeIn',
    offset: 100
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
				$(this).children('span').html('&and;');
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
  dots: false,
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
        dots: false
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












//Dillers submit

    $('#dillers__form').submit(function() {
        var form_data = $(this).serialize(); //собераем все данные из формы
        form_data = form_data + '&action=dillers';
        $.ajax({
            type: "POST", //Метод отправки
            url: "/build/php/mail.php", //путь до php фаила отправителя
            async: false,
            data: form_data,
            success: function(html) {
                //код в этом блоке выполняется при успешной отработке php-скрипта
                if (html == 'true') {
                    $('#winsendmail .win__header').html('Запрос отправлен');
                    $('#winsendmail .win__text').html('Ваш запрос на сотрудничество отправлен! Наш менеджер свяжется с Вами в ближайшее время.');
                    $('#winsendmail .win__newcalc').hide();
                    $('#winsendmail').show();
                } else {
                    alert('Ошибка отправки сообщения: ' + html);
                }
            },
            error: function(html){
                console.log("form_data", form_data);
                alert('error!');
            }
        });
    
        return false;
    });





//Modal window call

    $('#call').click(function(){
       $('#wincall').show(500);
    });


    $('#wincall .win__close').click(function(){
       $('#wincall').hide(500);

    });


    $("#wincall").click(function(e) {

        if($(e.target).closest("#wincall .wincall").length==0) {
             $("#wincall").hide(500);
        } 

    });
    
    $('#wincall_form').submit(function() {
        var form_data = $(this).serialize(); //собираем все данные из формы
        form_data = form_data + '&action=callback';
        $.ajax({
            type: "POST", //Метод отправки
            url: "/build/php/mail.php", //путь до php фаила отправителя
            async: false,
            data: form_data,
            success: function(html) {
                //код в этом блоке выполняется при успешной отработке php-скрипта
                if (html == 'true') {
                    $('#winsendmail .win__header').html('Запрос отправлен');
                    $('#winsendmail .win__text').html('Ваш запрос на обратный звонок отправлен! Наш менеджер свяжется с Вами в указанное время.');
                    $('#winsendmail .win__newcalc').hide();
                    $('#wincall').hide();
                    $('#winsendmail').show();
                } else {
                    alert('Ошибка отправки сообщения: ' + html);
                }
            },
            error: function(html){
                console.log("form_data", form_data);
                alert('error!');
            }
        });
    
        return false;
    });

//Modal windows sendmail

    $("#winsendmail .win__close").click(function(){
        $("#winsendmail").hide(500);
    });
    
    $("#winsendmail .win__ok").click(function(){
        $("#winsendmail").hide(500);
    });
    
    $("#winsendmail .win__newcalc").click(function(){
        $('#wincalcul_form')[0].reset();
        $("#winsendmail").hide();
        $("#wincalcul").show();
    });
    
    $("#winsendmail").click(function(e) {
        if($(e.target).closest("#winsendmail .wincalcul").length==0) {
             $("#winsendmail").hide(500);
        } 
    });
    





    
    $("#winzakaz .win__close").click(function(){
        $("#winzakaz").hide(500);
    });
    
    $("#winzakaz_recalc").click(function(){
        $("#winzakaz").hide();
        $("#wincalcul").show();
    });
    
    $("#winzakaz").click(function(e) {
        if($(e.target).closest("#winzakaz .winzakaz").length==0) {
             $("#winzakaz").hide(500);
        } 
    });
    
    $('#winzakaz_form').submit(function() {
        var form_data = $(this).serialize(); //собераем все данные из формы
        form_data = form_data + '&action=zakaz&l=' + l + '&h=' + h + '&x=' + x + '&face_text=' + face_text + '&cover_text=' + cover_text + '&kolvo=' + kolvo + '&pogmet=' + pogmet + '&calc=' + calc;
        //alert(form_data);
        $.ajax({
            type: "POST", //Метод отправки
            url: "/build/php/mail.php", //путь до php фаила отправителя
            async: false,
            data: form_data,
            success: function(html) {
                //код в этом блоке выполняется при успешной отработке php-скрипта
                //alert(html);
                if (html == 'true') {
                    $('#winsendmail .win__header').html('Заказ принят');
                    $('#winsendmail .win__text').html('Ваш заказ принят! Наш менеджер свяжется с Вами в ближайшее время.');
                    $('#winsendmail .win__newcalc').show();
                    $('#winzakaz').hide();
                    $('#winsendmail').show();
                } else {
                    alert('Ошибка отправки сообщения: ' + html);
                }
            },
            error: function(html){
                console.log("form_data", form_data);
                alert('error!');
            }
        });
    
        return false;
    });


//Modal window calculate

    $("#calculate_but1").click(function(){
       $("#wincalcul").show(500);
    });


    $("#calculate_but2").click(function(){
       $("#wincalcul").show(500);
    });


    $("#wincalcul .win__close").click(function(){
       $("#wincalcul").hide(500);
    });

    $("#wincalcul").click(function(e) {
        if($(e.target).closest("#wincalcul .wincalcul").length==0) {
             $("#wincalcul").hide(500);
        } 
    });
    

    $('#wincalcul_form').submit(function() {
        //заменить разделитель целой и дробной части и преобразовать к числу
        l = parseFloat($('#wincalcul_l').val().replace(',', '.'));
        if (isNaN(l)) {
            l = '';
            $('#wincalcul_l').val('');
            return false;
        }
        //заменить значение в поле формы на преобразованное
        $('#wincalcul_l').val(l);
        
        h = parseFloat($('#wincalcul_h').val().replace(',', '.'));
        if (isNaN(h)) {
            h = '';
            $('#wincalcul_h').val('');
            return false;
        }
        $('#wincalcul_h').val(h);
        
        x = parseFloat($('#wincalcul_x').val().replace(',', '.'));
        if (isNaN(x)) {
            x = 0;
            $('#wincalcul_x').val('');
        }
        if (x > 0)
            $('#wincalcul_x').val(x);
        
        //если расстояние между планками не укзано, взять стандартные значения, иначе введенное значение перевести в метры
        if (x == 0) 
            x = dist_x[$('#wincalcul_face:checked').val()];
        else
            x = x / 100;
   




        //расчет стоимости


        face = $('#wincalcul_face:checked').val();
        face_text = $('#wincalcul_face:checked+label').text();
        cover = $('#wincalcul_cover').val();
        cover_text = $('#wincalcul_cover option:selected').text();
        if (face == 'oneside') 
            kolvo = l / (0.13 + x);

        if (face == 'twoside') 
            kolvo = 2 * l / (0.13 + x) - 1;

        kolvo = Math.round(kolvo);
        pogmet = h * kolvo;
        calc = price[cover] * h * kolvo;
        pogmet = pogmet.toFixed(2);   
        calc = calc.toFixed(2);
        
        //Вывод стоимости в окно заказа
        $('#zakaz_l').html(l);
        $('#zakaz_h').html(h);
        $('#zakaz_x').html(x * 100);
        $('#zakaz_face').html(face_text);
        $('#zakaz_cover').html(cover_text);
        $('#zakaz_kolvo').html(kolvo);
        $('#zakaz_pogmet').html(pogmet);
        $('#zakaz_calc').html(calc);
        //Вывод окна заказа
        $("#wincalcul").hide();
        $("#winzakaz").show();

        return false;
    });


});		
			