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


$('.new_hover1').mouseenter(function () {
    $('.banner-show-area').hide();
    $('#menu1').removeClass('hide');
    
    
});

$('.new_hover1').mouseleave(function () { 
    $('.banner-show-area').show();
    $('#menu1').addClass('hide' );
    
 });

// nextlis

$('.new_hover2').mouseenter(function () {
    $('.banner-show-area').hide();
    $('#menu2').removeClass('hide');
    
    
});

$('.new_hover2').mouseleave(function () { 
    $('.banner-show-area').show();
    $('#menu2').addClass('hide' );
    
 });

 
$('.new_hover3').mouseenter(function () {
    $('.banner-show-area').hide();
    $('#menu3').removeClass('hide');
    
    
});

$('.new_hover3').mouseleave(function () { 
    $('.banner-show-area').show();
    $('#menu3').addClass('hide' );
    
 });


 
$('.new_hover4').mouseenter(function () {
    $('.banner-show-area').hide();
    $('#menu4').removeClass('hide');
    
    
});

$('.new_hover4').mouseleave(function () { 
    $('.banner-show-area').show();
    $('#menu4').addClass('hide' );
    
 });


 
$('.new_hover5').mouseenter(function () {
    $('.banner-show-area').hide();
    $('#menu5').removeClass('hide');
    
    
});

$('.new_hover5').mouseleave(function () { 
    $('.banner-show-area').show();
    $('#menu5').addClass('hide' );
    
 });


 
$('.new_hover6').mouseenter(function () {
    $('.banner-show-area').hide();
    $('#menu6').removeClass('hide');
    
    
});

$('.new_hover6').mouseleave(function () { 
    $('.banner-show-area').show();
    $('#menu6').addClass('hide' );
    
 });


 
$('.new_hover7').mouseenter(function () {
    $('.banner-show-area').hide();
    $('#menu7').removeClass('hide');
    
    
});

$('.new_hover7').mouseleave(function () { 
    $('.banner-show-area').show();
    $('#menu7').addClass('hide' );
    
 });

 
 $('.new_icon').mouseenter(function () {
    $('.body-nav').show();
    $('.side-banner').hide();


    
    
    
});

$('.new_icon').mouseleave(function () { 
    $('.body-nav').hide();
    $('.side-banner').show();
    
 });