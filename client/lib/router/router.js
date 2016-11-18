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
    /*this.route('home', {
        path:'/',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'moolyaHeader': {to: 'header'}
        })
    });*/
    this.route('startup', {
        path:'/',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'moolyaHomeHeader': {to: 'header'},
            'moolyaNavHome': {to: 'leftNav'}
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

    this.route('chart', {
        path:'/chart',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'moolyaHeader': {to: 'header'},
            'moolyaLeftNav': {to: 'leftNav'}
        })
    });

    this.route('awardsAndRewards', {
        path:'/awardsAndRewards',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'moolyaHeader': {to: 'header'},
            'moolyaLeftNav': {to: 'leftNav'}
        })
    });

    this.route('promoters', {
        path:'/promoters',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'moolyaHeader': {to: 'header'},
            'moolyaLeftNav': {to: 'leftNav'}
        })
    });

    this.route('membership', {
        path:'/membership',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'moolyaHeader': {to: 'header'},
            'moolyaLeftNav': {to: 'leftNav'}
        })
    });

    this.route('library', {
        path:'/library',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'moolyaHeader': {to: 'header'},
            'moolyaLeftNav': {to: 'leftNav'}
        })
    });

    this.route('businessData', {
        path:'/businessData',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'moolyaHeader': {to: 'header'},
            'moolyaLeftNav': {to: 'leftNav'}
        })
    });

    this.route('ideators', {
        path:'/ideators',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'moolyaHeader': {to: 'header'},
            'moolyaNavHome': {to: 'leftNav'}
        })
    });

    this.route('idea', {
        path:'/idea',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'moolyaHeader': {to: 'header'},
            'moolyaNavIdeators': {to: 'leftNav'}
        })
    });

    this.route('ideator', {
        path:'/ideator',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'moolyaHeader': {to: 'header'},
            'moolyaNavIdeators': {to: 'leftNav'}
        })
    });

    this.route('problemAndSolution', {
        path:'/problemAndSolution',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'moolyaHeader': {to: 'header'},
            'moolyaNavIdeators': {to: 'leftNav'}
        })
    });

    this.route('ideatorlibrary', {
        path:'/ideatorlibrary',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'moolyaHeader': {to: 'header'},
            'moolyaNavIdeators': {to: 'leftNav'}
        })
    });

    this.route('audience', {
        path:'/audience',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'moolyaHeader': {to: 'header'},
            'moolyaNavIdeators': {to: 'leftNav'}
        })
    });

    this.route('strategyPlan', {
        path:'/strategyPlan',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'moolyaHeader': {to: 'header'},
            'moolyaNavIdeators': {to: 'leftNav'}
        })
    });

    this.route('ipAndTradeMark', {
        path:'/ipAndTradeMark',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'moolyaHeader': {to: 'header'},
            'moolyaNavIdeators': {to: 'leftNav'}
        })
    });

    this.route('lookFor', {
        path:'/lookFor',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'moolyaHeader': {to: 'header'},
            'moolyaNavIdeators': {to: 'leftNav'}
        })
    });



})