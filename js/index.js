$(document).ready(function(){

    $("#theTarget").skippr();

});

$("#theTarget").skippr({

    transition: 'fade',
    speed: 1000,
    easing: 'easeOutQuart',
    navType: 'bubble',
    childrenElementType: 'div',
    arrows: true,
    autoPlay: true,
    autoPlayDuration: 2000,
    keyboardOnAlways: true,
    hidePrevious: true

});


$('.new_hover').mouseenter(function () { 
    $('#menu1').removeClass('hide');
});

$('.new_hover').mouseleave(function () { 
    $('#menu1').addClass('hide' );
 });

// nextlis
 $('.new_hover2').mouseenter(function () { 
    $('#menu2').removeClass('hide');
});

$('.new_hover2').mouseleave(function () { 
    $('#menu2').addClass('hide');
 });
 

$('.new_hover3').mouseenter(function () { 
    $('#menu3').removeClass('hide');
});

$('.new_hover3').mouseleave(function () { 
    $('#menu3').addClass('hide');
 });

 $('.new_hover4').mouseenter(function () { 
    $('#menu4').removeClass('hide');
});

$('.new_hover4').mouseleave(function () { 
    $('#menu4').addClass('hide');
 });

 $('.new_hover5').mouseenter(function () { 
    $('#menu5').removeClass('hide');
});

$('.new_hover5').mouseleave(function () { 
    $('#menu5').addClass('hide');
 });

 $('.new_hover6').mouseenter(function () { 
    $('#menu6').removeClass('hide');
});

$('.new_hover6').mouseleave(function () { 
    $('#menu6').addClass('hide');
 });

 $('.new_hover7').mouseenter(function () { 
    $('#menu7').removeClass('hide');
});

$('.new_hover7').mouseleave(function () { 
    $('#menu7').addClass('hide');
 });