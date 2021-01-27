 
! function ($) {

    "use strict";

    /*============================================

                        ScrollUp

    ==============================================*/
    $.scrollUp({
        scrollText: '<i class="la la-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*============================================

                        Menu

    ==============================================*/

    $('.navbar-toggle').on('click', function (event) {
        $(this).toggleClass('open');
        $('#navigation').slideToggle(400);
    });

    $('.navigation-menu>li').slice(-1).addClass('last-elements');

    $('.menu-arrow,.submenu-arrow').on('click', function (e) {
        if ($(window).width() < 992) {
            e.preventDefault();
            $(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
        }
    });

    $(".navigation-menu a").each(function () {
        if (this.href == window.location.href) {
            $(this).parent().addClass("active");
            $(this).parent().parent().parent().addClass("active");
            $(this).parent().parent().parent().parent().parent().addClass("active");
        }
    });

    // Clickable Menu
    $(".has-submenu a").click(function () {
        if (window.innerWidth < 992) {
            if ($(this).parent().hasClass('open')) {
                $(this).siblings('.submenu').removeClass('open');
                $(this).parent().removeClass('open');
            } else {
                $(this).siblings('.submenu').addClass('open');
                $(this).parent().addClass('open');
            }
        }
    });
    //Sticky
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".sticky").addClass("nav-sticky");
        } else {
            $(".sticky").removeClass("nav-sticky");
        }
    });
    /*============================================

                    Back to top

    ==============================================*/

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });
    $('.back-to-top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    
 
    

    /*===========================================

                        Preloader

    =============================================*/

    $(window).on("load", function () {
        $("#status").fadeOut();
        $("#preloader").delay(2).fadeOut("slow");
        $("body").delay(50).css({
            overflow: "visible",
        });
    });
    /*
    (2000
50000*/

     
   
        /*===========================================

                        Hover
                       
    =============================================*/

    $.fn.mousetip = function (tip, x, y) {

        var $this = $(this);

        $this.hover(function () {

            $(tip, this).show();

        }, function () {

            $(tip, this).hide().removeAttr('style');

        }).mousemove(function (e) {

            var mouseX = e.pageX;
            var mouseY = e.pageY;

            $(tip, this).show().css({

                top: mouseY,
                left: mouseX

            });
        });
    };

         /*******************/
         
 
    
}(jQuery)

/*=========================================*/