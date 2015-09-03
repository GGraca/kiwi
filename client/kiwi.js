Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

Template.home.helpers({
  posts: function(){
    return Posts.find({}, {sort: {date: -1}});
  }
});
