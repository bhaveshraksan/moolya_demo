Template.promoters.onRendered(function () {
    Meteor.defer(function () {
        $('#sb-container').swatchbook({
            openAt: 0
        });
    })

})