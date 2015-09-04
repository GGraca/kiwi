
Template.events.helpers({
	allevents: function(){
		return Events.find({}, {sort: {date: -1}} );
	}
});

