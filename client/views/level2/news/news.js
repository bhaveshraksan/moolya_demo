/**
 * Created by murali on 19/11/16.
 */
Template.news.onRendered(function(){

    Meteor.defer(function (){
       // debugger;
        var util= new MlUtils().fixedContainer();
    })

    var swiper = new Swiper('.news-swiper', {
        nextButton: '.swiper-button-next'
        , prevButton: '.swiper-button-prev'
        , spaceBetween: 0
        , autoplay: 2500
        , slidesPerView: 6
        , autoplayDisableOnInteraction: false
    });
    var swiper2 = new Swiper('.swiper2', {
        pagination: '.swiper-pagination2',
        paginationClickable: true,
        slidesPerView: 1,
    });
    var swiper3 = new Swiper('.swiper3', {
        pagination: '.swiper-pagination3',
        paginationClickable: true,
        slidesPerView: 1,
    });

});