(function ($) {
    "use strict";

    function testimonialSlider($scope, $) {
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
    }
    function brandSlider($scope, $) {
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
    }
    function testimonialSliderTwo($scope, $) {
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
    }
    function blogSlider($scope, $) {
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
    }
    function instagramSlier($scope, $) {
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
    }
    function productSlier($scope, $) {
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
    }

    $(window).on('elementor/frontend/init', function () {
        if (elementorFrontend.isEditMode()) {
            elementorFrontend.hooks.addAction('frontend/element_ready/int-testimonial.default', testimonialSlider)
            elementorFrontend.hooks.addAction('frontend/element_ready/int-brand.default', brandSlider)
            elementorFrontend.hooks.addAction('frontend/element_ready/int-testimonial-v2.default', testimonialSliderTwo)
            elementorFrontend.hooks.addAction('frontend/element_ready/int-blog-v2.default', blogSlider)
            elementorFrontend.hooks.addAction('frontend/element_ready/int-instagram.default', instagramSlier)
            elementorFrontend.hooks.addAction('frontend/element_ready/int-products.default', productSlier)
            elementorFrontend.hooks.addAction('frontend/element_ready/int-products-v3.default', productSlier)
        }
    });

})(jQuery);