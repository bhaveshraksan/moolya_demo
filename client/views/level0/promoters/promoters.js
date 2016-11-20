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

    $("#item-1").click(function () {
        $("#content-1").toggle();
        $("#content-4").hide();
        $("#content-2").hide();
        $("#content-3").hide();
        $("#content-5").hide();
        $("#content-6").hide();
    });
    $("#item-2").click(function () {
        $("#content-2").toggle();
        $("#content-1").hide();
        $("#content-4").hide();
        $("#content-3").hide();
        $("#content-5").hide();
        $("#content-6").hide();
    });
    $("#item-3").click(function () {
        $("#content-3").toggle();
        $("#content-1").hide();
        $("#content-2").hide();
        $("#content-4").hide();
        $("#content-5").hide();
        $("#content-6").hide();
    });
    $("#item-4").click(function () {
        $("#content-4").toggle();
        $("#content-1").hide();
        $("#content-2").hide();
        $("#content-3").hide();
        $("#content-5").hide();
        $("#content-6").hide();
    });
    $("#item-5").click(function () {
        $("#content-5").toggle();
        $("#content-1").hide();
        $("#content-2").hide();
        $("#content-3").hide();
        $("#content-4").hide();
        $("#content-6").hide();
    });
    $("#item-6").click(function () {
        $("#content-6").toggle();
        $("#content-1").hide();
        $("#content-2").hide();
        $("#content-3").hide();
        $("#content-4").hide();
        $("#content-5").hide();
    });


        $('#sb-container').swatchbook({
            openAt: 0
        });


})