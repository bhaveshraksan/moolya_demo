/**
 * Created by murali on 19/11/16.
 */
Template.funders.onRendered(function(){
    Meteor.defer(function (){
       // debugger;
        var util= new MlUtils().fixedContainer();
    })


    Meteor.defer(function () {
        $('.data-grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });
    })
});