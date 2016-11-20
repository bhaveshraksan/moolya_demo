
Meteor.methods({
	registerMoolyaUser: function (regObj) {
		check(regObj,Object);
		try{
			var id = MlRegistration.insert(regObj);
		}catch(e){
			throw new Meteor.Error(403,"An User with this email already exists,Please register with a new email address");
		}
		MoolyaNotifier.moolyaUserRegistrationNotification(id);
		MoolyaNotifier.moolyaUserDetailsForAdminNotification(id);
		return "Success";
	}
});