/**
 * Created by murali on 19/11/16.
 */
Template.engagement.onRendered(function(){

    Meteor.defer(function (){
       // debugger;
        var util= new MlUtils().fixedContainer();
    })

    var swiper = new Swiper('.engagement-swiper', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 0,
        autoplay: 2500,
        slidesPerView: 5,
        autoplayDisableOnInteraction: false
    });

});