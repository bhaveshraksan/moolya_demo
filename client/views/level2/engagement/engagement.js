/**
 * Created by murali on 19/11/16.
 */
Template.engagement.onRendered(function(){

    Meteor.defer(function (){
       // debugger;
        var util= new MlUtils().fixedContainer();
    })

    var swiper = new Swiper('.engagement-swiper', {
        spaceBetween: 0,
        slidesPerView: 5,
        spaceBetween: 0,
        pagination:'.swiper-pagination',
        slidesPerView: 6,
        paginationClickable: true
    });

});