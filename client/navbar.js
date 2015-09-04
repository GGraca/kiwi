
Template.navbar.helpers({
	myUserId: function(){
		if(Meteor.userId())
			return Meteor.userId();
		else
			return "";
	},
	myUsername: function(){
		if(Meteor.user() != null)
			return Meteor.user().username;
		else
			return "";
	}
});
