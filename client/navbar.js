
Template.navbar.helpers({
	myUserId: function(){
		return Meteor.userId();
	},
	myUsername: function(){
		return Meteor.user().username;
	}
});
