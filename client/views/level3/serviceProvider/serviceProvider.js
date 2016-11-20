/**
 * Created by murali on 20/11/16.
 */
Template.serviceProvider.onRendered(function(){

    Meteor.defer(function (){
        // debugger;
        var util= new MlUtils().fixedContainer();
    })

    var swiper = new Swiper('.serviceprovider-swiper', {
        pagination: '.swiper-pagination'
        , slidesPerView: '5'
        , paginationClickable: true
        , spaceBetween: 10
    });

});