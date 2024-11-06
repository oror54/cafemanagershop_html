//헤더 고정
$(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 30) {
            $(".header").addClass('fixed');
            $(".m-header").addClass('fixed');
        } else {
            $(".header").removeClass('fixed');
            $(".header").removeClass('fixed')
        };
    })
})

$(function () {
    $(".header").on('mouseenter', function () {
        $('.header').addClass('on');
    }).on('mouseleave', function () {
        $('.header').removeClass('on');
    });
    $(".header.on").on('mouseleave', function () {
        $('.header').removeClass('on');
    });

    //mobile
    $(".m-header").on('mouseenter', function () {
        $('.m-header').addClass('on');
    }).on('mouseleave', function () {
        $('.m-header').removeClass('on');
    });
    $(".m-header.on").on('mouseleave', function () {
        $('.m-header').removeClass('on');
    });
    $('body').on('click', '.mBtn', function () {
        if ($(this).hasClass('close')) {
            $(".lnb").fadeOut(1000);
            $(this).removeClass('close');
            $('body').removeClass('active');
            $('.m-header').removeClass('act');
        } else {
            $(".lnb").fadeIn(1000);
            $(this).addClass('close');
            $('body').addClass('active');
            $('.m-header').addClass('act');
        }
    });
})
