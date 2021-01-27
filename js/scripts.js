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

    /**
     * HAMBURGER
     */
    $('.menu-toggle-inner').on('click', () => {
        $('.adaptive-menu-toggle').toggleClass('adaptive-menu-toggle--open');
        $('.headerNav_adaptive').toggleClass('header_opened');
    });
});
