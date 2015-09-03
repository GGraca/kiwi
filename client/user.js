Template.user.helpers({
	username: function(){
		return Meteor.user().username;
	},
	posts: function(){
    return Posts.find({userId: Meteor.userId()}, {sort: {date: -1}});
	}
});

Template.user.events({
	  'keypress textarea': function (evt) {
	    if (evt.which === 13) {
	      console.log('enter');
	      Posts.insert({userId: Meteor.userId(), text: evt.target.value, username: Meteor.user().username, date: Date.parse()});
	      evt.target.value = "";
	      evt.stopPropagation();
	    }
	}
})
