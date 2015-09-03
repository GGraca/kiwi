
Template.user.helpers({
	userId: function(){
		return this.userId;
	},
	username: function(){
		return Meteor.users.findOne({_id: this.userId}).username;
	},
	isMyPage: function(){
		return Meteor.userId() == this.userId;
	}
});

Template.user.events({
	  'keypress textarea': function (evt) {
	    if (evt.which === 13) {
	      Posts.insert({userId: Meteor.userId(), text: evt.target.value, username: Meteor.user().username})
	      evt.target.value = "";
	      evt.stopPropagation();
	    }
	}
})