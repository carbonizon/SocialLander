$(document).ready(function(){
    $("#register").click(function() {
        $('html,body').animate({
            scrollTop: $(".section-three").offset().top},600);
    });
    $("#register2").click(function() {
        $('html,body').animate({
            scrollTop: $(".section-three").offset().top},600);
    });
    $("#login").click(function() {
        $('html,body').animate({
            scrollTop: $(".section-four").offset().top},600);
    });
    function click() {
        $('html,body').animate({
            scrollTop: $(".section-three").offset().top},600);
    }
    $(function() {
        $('.nav a').on('click', function(){ 
            if($('.navbar-toggle').css('display') !='none'){
                $(".navbar-toggle").trigger( "click" );
            }
        });
    });
})