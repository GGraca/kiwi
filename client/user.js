Template.user.helpers({
	username: function(){
		return Meteor.user().username;
	}
});

Template.user.events({
	  'keypress textarea': function (evt) {
	    if (evt.which === 13) {
	      console.log('enter');
	      Posts.insert({userId: Meteor.userId(), text: evt.target.value, username: Meteor.user().username})
	      evt.target.value = "";
	      evt.stopPropagation();
	    }
	}
})