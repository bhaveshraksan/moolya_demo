/**
 * Created by murali on 19/11/16.
 */
Template.librarysp.onRendered(function(){
    Meteor.defer(function (){
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            spaceBetween: 10,
            slidesPerView:'1',
            paginationClickable: true,
        });
    })
    Meteor.defer(function (){
       // debugger;
        var util= new MlUtils().fixedContainer();
    })
});

Template.librarysp.onRendered(function(){
    $("[rel^='lightbox']").prettyPhoto();
});