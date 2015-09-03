Router.plugin('dataNotFound');

Router.route('/user/:id', {
	template: 'user',
	notFoundTemplate: 'notFound',
	data: function(){
		console.log(this.params.id);
		if(Meteor.users.findOne({_id: this.params.id}))
			return {userId: this.params.id};
		else
			return null;

	}
})

Posts = new Mongo.Collection('posts');