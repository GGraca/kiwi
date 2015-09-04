Router.plugin('dataNotFound');

Router.route('/user/:id', {
	template: 'user',
	notFoundTemplate: 'notFound',
	data: function(){
		console.log(this.params.id);
		if(Meteor.users.findOne({_id: this.params.id}))
			return {userId: this.params.id};
		else{
			console.log('null')
			return null;
		}
	}
})
Router.route('/event/:id', {
	template: 'event',
	notFoundTemplate: 'notFound',
	data: function(){
		console.log(this.params.id);
		if(Events.findOne({_id: this.params.id}))
			return {eventId: this.params.id};
		else{
			console.log('null')
			return null;
		}
	}
})

Router.route('/', {
	template: 'home'
})
Router.route('/events', {
	template: 'events'
})

Posts = new Mongo.Collection('posts');
Events = new Mongo.Collection('events');
