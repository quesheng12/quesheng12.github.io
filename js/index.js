$(document).ready(function () {


    $("#background-2").quietflow({
        theme: "simpleGradient",
        primary: "#BFCCB5",
        accent: "#7C96AB"
    })

    $("#background-0").quietflow({
        theme: "simpleGradient",
        primary: "#98D8AA",
        accent: "#F3E99F"
    })

    $("#background-1").quietflow({
        theme: "simpleGradient",
        primary: "#B066FE",
        accent: "#63E2FF"
    })

    $(".box").mouseover(function () {
        $(this).find(".page2-label").css("transform", "scale(0)");
    });

    $(".box").mouseleave(function () {
        $(this).find(".page2-label").css("transform", "scale(1)");
    });


    // $(window).on('load resize', function () {
    //     var $thisnav = $('.current-menu-item').offset().left;
    //     $('.menu-item').hover(function () {
    //         var $left = $(this).offset().left - $thisnav;
    //         var $width = $(this).outerWidth();
    //         var $start = 0;
    //         $('.wee').css({'left': $left, 'width': $width});
    //     }, function () {
    //         var $initwidth = $('.current-menu-item').width();
    //         $('.wee').css({'left': '0', 'width': $initwidth});
    //     });
    // });
});