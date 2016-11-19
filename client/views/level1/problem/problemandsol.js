/**
 * Created by murali on 18/11/16.
 */
Template.problemAndSolution.onRendered(function(){

    var swiper = new Swiper('.problemandsol-swiper', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 0,
        autoplay: 2500,
        slidesPerView: 5,
        autoplayDisableOnInteraction: false
    });
    Meteor.defer(function (){
       // debugger;
        var util= new MlUtils().fixedContainer();
    })

});

