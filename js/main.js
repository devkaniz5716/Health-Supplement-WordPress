(function ($) {
    "use strict";

    $(window).on('load', function () {
        preloader();
        wowAnimation();
    });

    /*------------------------------------------
    = preloader
    -------------------------------------------*/
    function preloader() {
        $('#xb-loadding').delay(0).fadeOut();
    }

    /*------------------------------------------
    = back to top
    -------------------------------------------*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.xb-backtotop').addClass('active');
        } else {
            $('.xb-backtotop').removeClass('active');
        }
    });
    $(function () {
        $(".scroll").on('click', function () {
            $("html,body").animate({ scrollTop: 0 }, "slow");
            return false
        });
    });

    /*------------------------------------------
    = sticky header
    -------------------------------------------*/

    // sticky header
    if ($('.stricky').length) {
        $('.stricky').addClass('original').clone(true).insertAfter('.stricky').addClass('stricked-menu').removeClass('original');
    }
    $(window).on('scroll', function () {
        if ($('.stricked-menu').length) {
            var headerScrollPos = 100;
            var stricky = $('.stricked-menu');
            if ($(window).scrollTop() > headerScrollPos) {
                stricky.addClass('stricky-fixed');
            } else if ($(this).scrollTop() <= headerScrollPos) {
                stricky.removeClass('stricky-fixed');
            }
        }
    });

    /*------------------------------------------
    = header search
    -------------------------------------------*/
    $(".header-search-btn").on("click", function (e) {
        e.preventDefault();
        $(".header-search-form-wrapper").addClass("open");
        $('.header-search-form-wrapper input[type="search"]').focus();
        $('.body-overlay').addClass('active');
    });
    $(".xb-search-close").on("click", function (e) {
        e.preventDefault();
        $(".header-search-form-wrapper").removeClass("open");
        $("body").removeClass("active");
        $('.body-overlay').removeClass('active');
    });

    /*------------------------------------------
    = sidebar
    -------------------------------------------*/
    $('.sidebar-menu-close, .body-overlay').on('click', function () {
        $('.offcanvas-sidebar').removeClass('active');
        $('.body-overlay').removeClass('active');
    });

    $('.offcanvas-sidebar-btn').on('click', function () {
        $('.offcanvas-sidebar').addClass('active');
        $('.body-overlay').addClass('active');
    });
    $('.body-overlay').on('click', function () {
        $(this).removeClass('active');
        $(".header-search-form-wrapper").removeClass("open");
    });

    /*------------------------------------------
    = mobile menu
    -------------------------------------------*/
    $('.xb-nav-hidden li.menu-item-has-children > a').append('<span class="xb-menu-toggle"></span>');
    $('.xb-header-menu li.menu-item-has-children, .xb-menu-primary li.menu-item-has-children').append('<span class="xb-menu-toggle"></span>');
    $('.xb-menu-toggle').on('click', function () {
        if (!$(this).hasClass('active')) {
            $(this).closest('ul').find('.xb-menu-toggle.active').toggleClass('active');
            $(this).closest('ul').find('.sub-menu.active').toggleClass('active').slideToggle();
        }
        $(this).toggleClass('active');
        $(this).closest('.menu-item').find('> .sub-menu').toggleClass('active');
        $(this).closest('.menu-item').find('> .sub-menu').slideToggle();
    });

    $('.xb-nav-hidden li.menu-item-has-children > a').on('click', function () {
        var target = $(e.target);
        if ($(this).attr('href') === '#' && !(target.is('.xb-menu-toggle'))) {
            e.stopPropagation();
            if (!$(this).find('.xb-menu-toggle').hasClass('active')) {
                $(this).closest('ul').find('.xb-menu-toggle.active').toggleClass('active');
                $(this).closest('ul').find('.sub-menu.active').toggleClass('active').slideToggle();
            }
            $(this).find('.xb-menu-toggle').toggleClass('active');
            $(this).closest('.menu-item').find('> .sub-menu').toggleClass('active');
            $(this).closest('.menu-item').find('> .sub-menu').slideToggle();
        }
    });
    $(".xb-nav-mobile").on('click', function () {
        $(this).toggleClass('active');
        $('.xb-header-menu').toggleClass('active');
    });

    $(".xb-menu-close, .xb-header-menu-backdrop").on('click', function () {
        $(this).removeClass('active');
        $('.xb-header-menu').removeClass('active');
    });

    /*------------------------------------------
    = data background and bg color
    -------------------------------------------*/
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ") ")
    })
    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"));

    });

    /*------------------------------------------
    = wow animation
    -------------------------------------------*/
    function wowAnimation() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
    }

    /*------------------------------------------
    = product slider
    -------------------------------------------*/
    var slider = new Swiper(".product-slider", {
        loop: true,
        spaceBetween: 30,
        speed: 400,
        slidesPerView: 4,
        autoplay: {
            enabled: true,
            delay: 6000
        },
        navigation: {
            nextEl: '.xb-swiper-arrow-next',
            prevEl: '.xb-swiper-arrow-prev',
        },
        breakpoints: {
            '1600': {
                slidesPerView: 4,
            },
            '1200': {
                slidesPerView: 4,
            },
            '992': {
                slidesPerView: 3,
            },
            '768': {
                slidesPerView: 2
            },
            '576': {
                slidesPerView: 2,
            },
            '0': {
                slidesPerView: 1,
            },
        },
    });

    /*------------------------------------------
    = testimonial slider
    -------------------------------------------*/
    var slider = new Swiper(".testimonial-slider", {
        loop: true,
        spaceBetween: 90,
        speed: 400,
        slidesPerView: 3,
        autoplay: {
            enabled: true,
            delay: 7000
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            '1600': {
                slidesPerView: 3,
            },
            '1200': {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            '992': {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            '768': {
                slidesPerView: 2
            },
            '576': {
                slidesPerView: 2,
            },
            '0': {
                slidesPerView: 1,
            },
        },
    });

    // brand slider
    var slider = new Swiper('.brand-slider .swiper-container', {
        slidesPerView: 6,
        roundLengths: true,
        loop: true,
        loopAdditionalSlides: 30,
        watchSlidesVisibility: true,
        autoplay: {
            enabled: true,
            delay: 6000
        },
        speed: 400,
        breakpoints: {
            '1600': {
                slidesPerView: 6,
            },
            '1200': {
                slidesPerView: 6,
            },
            '992': {
                slidesPerView: 5,
            },
            '768': {
                slidesPerView: 4,
            },
            '576': {
                slidesPerView: 3,
            },
            '0': {
                slidesPerView: 2,
            },
        },
    });

    /*------------------------------------------
    = testimonial slider
    -------------------------------------------*/
    var slider = new Swiper(".testimonial-slider2", {
        loop: true,
        spaceBetween: 30,
        speed: 400,
        slidesPerView: 3,
        autoplay: {
            enabled: true,
            delay: 7000
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            '1600': {
                slidesPerView: 3,
            },
            '1200': {
                slidesPerView: 3,
            },
            '992': {
                slidesPerView: 3,
            },
            '768': {
                slidesPerView: 2
            },
            '576': {
                slidesPerView: 2,
            },
            '0': {
                slidesPerView: 1,
            },
        },
    });

    /*------------------------------------------
    = blog slider
    -------------------------------------------*/
    var slider = new Swiper(".blog-slider", {
        loop: true,
        spaceBetween: 30,
        speed: 400,
        slidesPerView: 3,
        autoplay: {
            enabled: true,
            delay: 7000
        },
        breakpoints: {
            '1600': {
                slidesPerView: 3,
            },
            '1200': {
                slidesPerView: 3,
            },
            '992': {
                slidesPerView: 3,
            },
            '768': {
                slidesPerView: 2
            },
            '576': {
                slidesPerView: 2,
            },
            '0': {
                slidesPerView: 1,
            },
        },
    });

    /*------------------------------------------
    = instagram slider
    -------------------------------------------*/
    var slider = new Swiper(".instagram-slider", {
        loop: true,
        spaceBetween: 0,
        speed: 400,
        slidesPerView: 4,
        autoplay: {
            enabled: true,
            delay: 7000
        },
        breakpoints: {
            '1600': {
                slidesPerView: 4,
            },
            '1200': {
                slidesPerView: 4,
            },
            '992': {
                slidesPerView: 3,
            },
            '768': {
                slidesPerView: 2
            },
            '576': {
                slidesPerView: 2,
            },
            '0': {
                slidesPerView: 2,
            },
        },
    });

    /*------------------------------------------
    = magnificPopup
    -------------------------------------------*/
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    $('.popup-video').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-zoom-in',
    });

    /*------------------------------------------
   = Post Gallery Slider
   -------------------------------------------*/
    var slider = new Swiper('.post-gallery-slider', {
        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,
        roundLengths: true,
        loop: true,
        loopAdditionalSlides: 30,
        autoplay: {
            enabled: true,
            delay: 6000
        },
        navigation: {
            nextEl: ".post-gallery-button-next",
            prevEl: ".post-gallery-button-prev",
        },
        speed: 400,
    });

    /*------------------------------------------
    = Accordion Box
    -------------------------------------------*/
    if ($(".accordion_box").length) {
        $(".accordion_box").on("click", ".acc-btn", function () {
            var outerBox = $(this).parents(".accordion_box");
            var target = $(this).parents(".accordion");

            if ($(this).next(".acc_body").is(":visible")) {
                $(this).removeClass("active");
                $(this).next(".acc_body").slideUp(300);
                $(outerBox).children(".accordion").removeClass("active-block");
            } else {
                $(outerBox).find(".accordion .acc-btn").removeClass("active");
                $(this).addClass("active");
                $(outerBox).children(".accordion").removeClass("active-block");
                $(outerBox).find(".accordion").children(".acc_body").slideUp(300);
                target.addClass("active-block");
                $(this).next(".acc_body").slideDown(300);
            }
        });
    }

    /*------------------------------------------
	= TOUCHSPIN FOR PRODUCT SINGLE PAGE
	-------------------------------------------*/
    if ($("input.product-count").length) {
        $("input.product-count").TouchSpin({
            min: 1,
            max: 1000,
            step: 1,
            buttondown_class: "btn btn-link",
            buttonup_class: "btn btn-link",
        });
    }


})(jQuery);



