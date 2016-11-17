//Iron-router global configuration
Router.configure({
    notFoundTemplate: "notFound",
    loadingTemplate: 'loading'
})
// Router.onBeforeAction(loginrequired, {
//     except: ['smtAdminLogin',]
// });
//
// Router.onBeforeAction(goToDashboard, {
//     only: ['smtAdminLogin']
// });
Router.map(function () {
    // this.route('homePage', {
    //     path:'/',
    //     layoutTemplate:'basicLayout',
    //     yieldTemplates: _.extend({}, {}, {
    //         'basicHeader': {to: 'header'}
    //     })
    // });
    // this.route('test', {
    //     path:'/test',
    //     layoutTemplate:'basicLayout',
    //     yieldTemplates: _.extend({}, {}, {
    //         'basicHeader': {to: 'header'}
    //     })
    // });
    this.route('startup', {
        path:'/',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'moolyaHeader': {to: 'header'},
            'moolyaLeftNav': {to: 'leftNav'}
        })
    });



    this.route('about', {
        path:'/about',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'moolyaHeader': {to: 'header'},
            'moolyaLeftNav': {to: 'leftNav'}
        })
    });
})