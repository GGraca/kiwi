
Template.event.helpers({
	posts: function(){
		console.log(Events.findOne({_id: this.eventId}).hashtags)
		return Posts.find({ hashtags: {$in: Events.findOne({_id: this.eventId}).hashtags }},
						  { sort: {date: -1} }
		).fetch()
	}
})