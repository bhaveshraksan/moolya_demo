/**
 * Created by murali on 21/11/16.
 */
Template.footerLayout.events({
    "click .homepage-switch":function(e, t)
    {
        if($(e.currentTarget).hasClass('mainview')){
        $('.moolya-main-view').hide();
        $('.moolya-map-view').show();
        $(e.currentTarget).removeClass('mainview').addClass('mapview');
    }else{
        $('.moolya-main-view').show();
        $('.moolya-map-view').hide();
        $(e.currentTarget).removeClass('mapview').addClass('mainview');
    }

    }

});
