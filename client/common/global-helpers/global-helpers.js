Template.registerHelper("menuItemClass", function (routeName) {
    if (!Router.current() || !Router.current().route) {
        return "";
    }



    var currentPath = Router.routes[Router.current().route.getName()].handler.path;
    var routePath = [];
    var arrRouteName = [];
    arrRouteName = routeName.split(",");
    _.each(arrRouteName,function (value,index) {
        routePath.push(Router.routes[value].handler.path)
    });

    if(routePath.indexOf(currentPath) != -1){
        return "active"
    }else{
        return "";
    }
});