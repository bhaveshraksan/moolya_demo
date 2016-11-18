/**
 * Created by murali on 18/11/16.
 */

Template.moolyaNavIdeators.onRendered(function() {
    $('.moolya-left-nav').height($(window).outerHeight(true) - 77).css({'overflow': 'auto'}).css({'overflow-x': 'hidden'});
});

