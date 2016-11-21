/**
 * Created by murali on 21/11/16.
 */
Template.hangingButton.events({
    "click .homepage-switch .listView": function (e, t) {
        e.stopPropagation();
        Router.go('/');
    },
    "click .homepage-switch .mapView": function (e, t) {
        e.stopPropagation();
        Router.go('/mapview');
    }

});
