import Ember from "ember";
import Session from "../controllers/session";

var get = Ember.get,
    set = Ember.set;

export default Ember.ObjectController.extend({

  ads: [],

  isLoggedIn: function (){
    return (get(Session, 'token'));
  }.property(),

  inAdminPortal: false,

  adminNavbar: function(){
    var sessionPermissionLevel = get(Session, 'permissionLevel');
    if (sessionPermissionLevel === "superuser") {
      return true;
    }
    if (sessionPermissionLevel === "admin") {
      return true;
    }
    if (sessionPermissionLevel === "author") {
      return true;
    }
    return false;
  }.property('isLoggedIn'),

  currentPathDidChange: function() {
    var self = this;
    Ember.run.schedule('afterRender', this, function() {
      var currentPath = get(self, 'currentPath');
      console.log('the path has changed to ---------->'+currentPath);
      if (currentPath.indexOf('admin') !== -1) {
        set(self, 'inAdminPortal', true);
        console.log('you are in an admin area');
      } else {
        set(self, 'inAdminPortal', false);
      }
    });
  }.observes('currentPath'),

  actions: {

    logout: function(){
      var self = this;
      var sessionId = get(Session, 'id');
      this.store.find('User', sessionId).then(function(user){
        set(user, 'token', 'loggedout');
        user.save().then(function(){
          set(self, 'isLoggedIn', false);
          set(Session, 'permissionLevel', 'viewer');
          set(Session, 'id', null);
          set(Session, 'token', null);
          localStorage.auth_account_id = null;
          localStorage.auth_account_type = null;
          localStorage.auth_token = null;
          self.transitionTo('articles');
        });
      })
    }

  }

});



