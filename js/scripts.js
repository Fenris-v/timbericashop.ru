$(document).ready(() => {
    /**
     * SLICK
     */
    $('.firstScreen__slider').slick({
        infinite: true,
        arrows: true,
        dots: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        prevArrow: '<div class="slick-arrow slick-prev"><img src="images/play.svg" alt="prev" /></div>',
        nextArrow: '<div class="slick-arrow slick-next"><img src="images/play.svg" alt="next" /></div>',
        responsive: [{
            breakpoint: 767,
            settings: {
                arrows: false
            }
        }]
    });

    $('.factoryPhoto__slider').slick({
        infinite: true,
        arrows: true,
        dots: false,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        prevArrow: '<div class="slick-arrow slick-prev"><img src="images/slider-arrow.png" alt="prev" /></div>',
        nextArrow: '<div class="slick-arrow slick-next"><img src="images/slider-arrow.png" alt="next" /></div>',
        responsive: [{
            breakpoint: 900,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 2
            }
        }]
    });

    /**
     * HAMBURGER
     */
    $('.menu-toggle-inner').on('click', () => {
        $('.adaptive-menu-toggle').toggleClass('adaptive-menu-toggle--open');
        $('.headerNav_adaptive').toggleClass('header_opened');
    });
});
