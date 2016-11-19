/**
 * Created by Mohammed.Mohasin on 18/11/16.
 */

var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var mobileRegex = /^\+?([0-9]{2,3})?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;


isValidMobileNo = function(mobileNo){
   var regex=mobileRegex;
   return regex.test(mobileNo);
}

isValidEmail = function(email) {
    //var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var regex=emailRegex;
    return regex.test(email);
};