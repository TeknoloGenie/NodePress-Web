import Ember from "ember";
import Session from "../controllers/session";
import AdminController from "../controllers/admin";

var get = Ember.get,
    set = Ember.set;

export default Ember.ObjectController.extend({

  formEmail: 'superuser@nodepress.org',

  formPassword: 'password',

  loginData: (function() {
    return {
      email: this.get('formEmail'),
      password: this.get('formPassword')
    };
  }).property('formEmail', 'formPassword'),

  actions: {
    login: function() {
      var self = this;
      var loginData = get(this, 'loginData');
      this.store.find('User', loginData)
          .then(storeUserSession)
          .then(login)
          .catch(error);

      function storeUserSession(user) {
        var currentUser = user.content[0]._data;
        Session.setProperties({id: currentUser.id, token: currentUser.token, permissionLevel: currentUser.type});
        return currentUser;
      }

      function login(user) {
        if(user.type === 'admin' || user.type === 'superuser') {
//          AdminController.permissionLevel = user.type;
          self.transitionToRoute('admin.dashboard');
        } else {
          self.transitionToRoute('articles');
        }
      }

      function error(error) {
        console.log(error);
        if (error.status === 301) {
          alert('a bug in our system was caught, no worries we squashed it now and you can proceed to login.');
          localStorage.auth_account_id = null;
          localStorage.auth_account_type = null;
          localStorage.auth_token = null;
        }
      }

    }
  },

  events: {

    error: function (error, transition) {
      console.log(error.message);
    }
  }
});