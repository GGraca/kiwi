
Template.user.helpers({
	userId: function(){
		return this.userId;
	},
	username: function(){
		return Meteor.users.findOne({_id: this.userId}).username;
	},
	posts: function(){
		return Posts.find({userId: this.userId}, {sort: {date: -1}} );
	},
	isMyPage: function(){
		return Meteor.userId() == this.userId;
	}
});

Template.user.events({
	'keypress textarea': function (evt) {
		if (evt.which === 13) {
			txt = evt.target.value;
			words = txt.split(' ');
			tags = []
			for(i=0; i<words.length; i++){
				if(words[i].startsWith('#'))
					tags.push(words[i].slice(1));
			}
			Posts.insert({userId: Meteor.userId(), text: evt.target.value, username: Meteor.user().username, date: Date.parse(), hashtags: tags });
			evt.target.value = "";
			evt.stopPropagation();
		}
	},
	'click #create': function(evt) {
		rawTags = $('.hashtag');
		tags = []
		for(i = 0; i<rawTags.length; i++){
			tags.push(rawTags[i].value)
		}
		console.log(tags)
		Events.insert({owner: Meteor.userId(), title: $('#evtname').val(), date: $('#evtdate').val(), hashtags: tags });
	},
	'click #addhashtag': function(evt){
		$('#event').append('<div class="divhashtag"> <p><input type="text" class="hashtag"> <button class="rmhashtag"> - </button> </p> </div>');
	},
	'click .rmhashtag': function(evt){
		evt.target.parentElement.parentElement.remove();
	}

})
