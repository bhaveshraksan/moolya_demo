/**
 * Created by murali on 18/11/16.
 */
Template.ideator.onRendered(function(){

    var swiper = new Swiper('.ideator-swiper', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 0,
        autoplay: 2500,
        slidesPerView: 5,
        autoplayDisableOnInteraction: false
    });

});
