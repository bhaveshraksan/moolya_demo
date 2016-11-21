/**
 * Created by murali on 18/11/16.
 */

Template.audience.onRendered(function(){

    var swiper = new Swiper('.audience-swiper', {
        spaceBetween: 0,
        slidesPerView: 5,
        spaceBetween: 0,
        pagination:'.swiper-pagination',
        slidesPerView: 6,
        paginationClickable: true
    });

    Meteor.defer(function (){
       // debugger;
        var util= new MlUtils().fixedContainer();
    })
});
