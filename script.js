$(document).ready(function(){

    $("#theTarget").skippr();

});    
$("#theTarget").skippr({

    transition: 'slide',
    speed: 9000,
    easing: 'easeOutQuart',
    navType: 'block',
    childrenElementType: 'div',
    arrows: false,
    autoPlay: true,
    autoPlayDuration: 6000,
    keyboardOnAlways: true,
    hidePrevious: false

});
    