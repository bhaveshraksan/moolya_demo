Template.promoters.onRendered(function () {
    Meteor.defer(function () {
        $('#sb-container').swatchbook({
            openAt: 0
        });
        var util= new MlUtils().fixedContainer();
    })

   /* var util=function() {
        new MlUtils().fixedContainer();
    }*/



})