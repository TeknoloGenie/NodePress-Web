import Ember from "ember";

var get = Ember.get;

var SignupController = Ember.Controller.extend({

  formUsername: 'Administrator',
  formFirstName: 'Aaron',
  formLastName: 'Russell',
  formPassword: 'pass',
  formVerifyPassword: 'pass',
  formEmail: 'aaron@teknologenie.com',
  formUserType: 'admin',

  signupData: function() {
    return {
      username: this.get('formUsername'),
      firstName: this.get('formFirstName'),
      lastName: this.get('formLastName'),
      password: this.get('formPassword'),
      email: this.get('formEmail'),
      type: this.get('formUserType')

    };
  }.property('formUsername', 'formPassword', 'formLastName', 'formFirstName', 'formEmail', 'formUserType'),

  actions: {
    signup: function() {
      var self = this;
      var signupData = get(this, 'signupData');
      var user = this.store.createRecord('User', signupData);
      user.save().then(function(user){
        alert('welcome user!');
        console.log(user);
        self.transitionTo('posts');
      });
    }
  }

});

export default SignupController;