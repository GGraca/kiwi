Router.route('/user', {
	template: 'user'
})
Router.route('/', {
	template: 'home'
})

Posts = new Mongo.Collection('posts');
