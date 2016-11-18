/**
 * Created by murali on 18/11/16.
 */
Template.library.onRendered(function(){
    Meteor.defer(function (){
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            spaceBetween: 10,
            slidesPerView:'1',
            paginationClickable: true,
        });
    })


});