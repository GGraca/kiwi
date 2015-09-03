Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});


Session.setDefault('counter', 0);

Template.hello.helpers({
  counter: function () {
    return Session.get('counter');
  }
});

Template.hello.events({
  'click button': function () {
    // increment the counter when button is clicked
    Session.set('counter', Session.get('counter') + 1);
  }
});

Template.home.helpers({
  posts: function(){
    return Posts.find({});
  }
});
