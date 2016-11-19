/**
 * Created by murali on 18/11/16.
 */
Template.strategyPlan.onRendered(function(){

    var swiper = new Swiper('.strategy-swiper', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: '1',
    });
    Meteor.defer(function (){
       // debugger;
        var util= new MlUtils().fixedContainer();
    })

});