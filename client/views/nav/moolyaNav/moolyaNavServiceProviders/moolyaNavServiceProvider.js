/**
 * Created by murali on 20/11/16.
 */
Template.moolyaNavserviceProviders.onRendered(function() {
    $('.moolya-left-nav').height($(window).outerHeight(true) - 77).css({'overflow': 'auto'}).css({'overflow-x': 'hidden'});
});

