import Ember from "ember";
import Session from "../controllers/session";

var get = Ember.get;

var AdminIndexRoute = Ember.Route.extend({

  access: [ 'admin', 'author', 'superuser' ],

  beforeModel: function() {
    var self = this;
    var sessionID = Session.get('id');
    if (!sessionID) {
      self.transitionTo('admin.login');
    } else {
      self.store.find('User', sessionID).then(proceed);
    }
    function proceed(person){
      if (get(self, 'access').contains(get(person, 'type'))) {
        return true;
      } else {
        return self.transitionTo('articles');
      }
    }
  },

  renderTemplate: function() {
    this._super();
    this.render('admin', {
      outlet: 'main',
      into: 'application'
    });
  }

});

export default AdminIndexRoute;