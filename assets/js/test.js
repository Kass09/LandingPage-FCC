$(document).ready(function(){
    var navOffset = 90;
    $(window).scroll(function(){
        var scrollDistance = $(window).scrollTop();
        if (scrollDistance > navOffset) {
            $('#nav-bar').addClass("nav-sticky navbar-dark");
            $('#header-img').addClass("sticky-img");
        } else{
            $('#nav-bar').removeClass("nav-sticky navbar-dark");
            $('#header-img').removeClass("sticky-img");
        }
    })
});