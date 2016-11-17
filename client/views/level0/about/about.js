Template.about.onRendered(function(){

    var swiper = new Swiper('.about-swiper', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 0,
        autoplay: 2500,
        slidesPerView: 6,
        autoplayDisableOnInteraction: false
    });

});