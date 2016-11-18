/**
 * Created by murali on 18/11/16.
 */
Template.basicLayout.onRendered(function() {
    $('.moolya-container').height($(window).outerHeight(true)-85).css({'overflow':'auto'}).css({'overflow-x':'hidden'});
});