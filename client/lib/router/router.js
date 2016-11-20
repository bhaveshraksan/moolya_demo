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

    this.route('promotorDetail', {
        path:'/promotorDetail',
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
    this.route('balanceSheet', {
        path:'/balanceSheet',
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
            'ideatorHeader': {to: 'header'},
            'moolyaNavHome': {to: 'leftNav'}
        })
    });

    this.route('idea', {
        path:'/idea',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'ideatorHeader': {to: 'header'},
            'moolyaNavIdeators': {to: 'leftNav'}
        })
    });

    this.route('ideator', {
        path:'/ideator',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'ideatorHeader': {to: 'header'},
            'moolyaNavIdeators': {to: 'leftNav'}
        })
    });

    this.route('problemAndSolution', {
        path:'/problemAndSolution',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'ideatorHeader': {to: 'header'},
            'moolyaNavIdeators': {to: 'leftNav'}
        })
    });

    this.route('ideatorlibrary', {
        path:'/ideatorlibrary',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'ideatorHeader': {to: 'header'},
            'moolyaNavIdeators': {to: 'leftNav'}
        })
    });

    this.route('audience', {
        path:'/audience',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'ideatorHeader': {to: 'header'},
            'moolyaNavIdeators': {to: 'leftNav'}
        })
    });

    this.route('strategyPlan', {
        path:'/strategyPlan',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'ideatorHeader': {to: 'header'},
            'moolyaNavIdeators': {to: 'leftNav'}
        })
    });

    this.route('ipAndTradeMark', {
        path:'/ipAndTradeMark',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'ideatorHeader': {to: 'header'},
            'moolyaNavIdeators': {to: 'leftNav'}
        })
    });

    this.route('lookFor', {
        path:'/lookFor',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'ideatorHeader': {to: 'header'},
            'moolyaNavIdeators': {to: 'leftNav'}
        })
    });

    this.route('funders', {
        path:'/funders',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'funderHeader': {to: 'header'},
            'moolyaNavHome': {to: 'leftNav'}
        })
    });

    this.route('aboutFunder', {
    path:'/aboutFunder',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'funderHeader': {to: 'header'},
            'moolyaNavFunders': {to: 'leftNav'}
        })
    });

    this.route('investment', {
        path:'/investment',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'funderHeader': {to: 'header'},
            'moolyaNavFunders': {to: 'leftNav'}
        })
    });

    this.route('principles', {
        path:'/principles',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'funderHeader': {to: 'header'},
            'moolyaNavFunders': {to: 'leftNav'}
        })
    });

    this.route('principleDetails', {
        path:'/principleDetails',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'funderHeader': {to: 'header'},
            'moolyaNavFunders': {to: 'leftNav'}
        })
    });

    this.route('areaofinterest', {
        path:'/areaofinterest',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'funderHeader': {to: 'header'},
            'moolyaNavFunders': {to: 'leftNav'}
        })
    });

    this.route('engagement', {
        path:'/engagement',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'funderHeader': {to: 'header'},
            'moolyaNavFunders': {to: 'leftNav'}
        })
    });

    this.route('success', {
        path:'/success',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'funderHeader': {to: 'header'},
            'moolyaNavFunders': {to: 'leftNav'}
        })
    });

    this.route('news', {
        path:'/news',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'funderHeader': {to: 'header'},
            'moolyaNavFunders': {to: 'leftNav'}
        })
    });

    this.route('libraryFunder', {
        path:'/libraryFunder',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'funderHeader': {to: 'header'},
            'moolyaNavFunders': {to: 'leftNav'}
        })
    });


    this.route('serviceProviders', {
        path:'/serviceProviders',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'serviceProviderHeader': {to: 'header'},
            'moolyaNavHome': {to: 'leftNav'}
        })
    });


    this.route('serviceProvider', {
        path:'/serviceProvider',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'serviceProviderHeader': {to: 'header'},
            'moolyaNavserviceProviders': {to: 'leftNav'}
        })
    });
    this.route('serviceDetails', {
        path:'/serviceDetails',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'serviceProviderHeader': {to: 'header'},
            'moolyaNavserviceProviders': {to: 'leftNav'}
        })
    });
    this.route('engagementsp', {
        path:'/engagementsp',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'serviceProviderHeader': {to: 'header'},
            'moolyaNavserviceProviders': {to: 'leftNav'}
        })
    });
    this.route('awardsAndRewardssp', {
        path:'/awardsAndRewardssp',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'serviceProviderHeader': {to: 'header'},
            'moolyaNavserviceProviders': {to: 'leftNav'}
        })
    });
    this.route('librarysp', {
        path:'/librarysp',
        layoutTemplate:'moolyaLayout',
        yieldTemplates: _.extend({}, {}, {
            'serviceProviderHeader': {to: 'header'},
            'moolyaNavserviceProviders': {to: 'leftNav'}
        })
    });




})