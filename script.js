$(document).ready(function(){

    $("#theTarget").skippr();

});    
$("#theTarget").skippr({

    transition: 'fade',
    speed: 2000,
    easing: 'easeOutQuart',
    navType: 'bubble',
    childrenElementType: 'div',
    arrows: false,
    autoPlay: false,
    autoPlayDuration: 2000,
    keyboardOnAlways: true,
    hidePrevious: false

});
    