Template.awardsAndRewards.onRendered(function (){
    Meteor.defer(function (){
        $('.data-grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer'
            }});
    })
})