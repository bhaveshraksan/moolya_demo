/**
 * Created by murali on 20/11/16.
 */
/**
 * Created by murali on 20/11/16.
 */
Template.serviceDetails.onRendered(function(){

    Meteor.defer(function (){
        var util= new MlUtils().fixedContainer();
    })

    var swiper = new Swiper('.serviceDetails-swiper', {
        pagination: '.swiper-pagination'
        , slidesPerView: '5'
        , paginationClickable: true
        , spaceBetween: 10
    });

});