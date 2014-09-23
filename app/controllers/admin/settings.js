import Ember from "ember";
import Session from "../../controllers/session";

var get = Ember.get;

export default Ember.ObjectController.extend({

  hasClearance: function() {
    var sessionId = get(Session, 'permissionLevel');
    return sessionId === 'admin' || sessionId === 'author' || sessionId === 'superuser';
  },

  hasTopLevelClearance: function() {
    var sessionId = get(Session, 'permissionLevel');
    return sessionId === 'admin' || sessionId === 'superuser';
  },

  name: null,
  url: null,
  adminEmail: null,

  settingsData: function() {
    var name = get(this, 'name'),
        url = get(this, 'url'),
        adminEmail = get(this, 'adminEmail');

    return {
      name: name,
      url: url,
      administratorEmail: adminEmail
    };
  }.property('name', 'url', 'adminEmail'),

  actions: {
    save: function() {
      var settingsData = get(this, 'settingsData');
      var user = this.store.createRecord('Settings', settingsData);
      user.save().then(function(){
        alert('settings saved!');
      });
    }
  }

});