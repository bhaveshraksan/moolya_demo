/**
 * Created by murali on 19/11/16.
 */
Template.success.onRendered(function(){

    Meteor.defer(function (){
        // debugger;
        var util= new MlUtils().fixedContainer();
    })
    var swiper = new Swiper('.success-swiper', {
        spaceBetween: 0,
        spaceBetween: 0,
        pagination:'.swiper-pagination',
        slidesPerView: 6,
        paginationClickable: true
    });

});