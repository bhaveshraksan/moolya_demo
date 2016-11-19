
Meteor.methods({
	registerMoolyaUser: function (regObj) {
		check(regObj,Object);
		var id = MlRegistration.insert(regObj);
		MoolyaNotifier.moolyaUserRegistrationNotification(id);
		MoolyaNotifier.moolyaUserDetailsForAdminNotification(id);
		return "Success";
	}
});