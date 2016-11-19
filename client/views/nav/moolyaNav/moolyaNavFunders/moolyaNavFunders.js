/**
 * Created by murali on 19/11/16.
 */
Template.moolyaNavFunders.onRendered(function() {
    $('.moolya-left-nav').height($(window).outerHeight(true) - 77).css({'overflow': 'auto'}).css({'overflow-x': 'hidden'});
});

