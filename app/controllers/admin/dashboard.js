import Ember from "ember";
import Session from "../../controllers/session";

var get = Ember.get;

export default Ember.ObjectController.extend({

  title: 'Dashboard',

  hasClearance: function() {
    var sessionId = get(Session, 'permissionLevel');
    return sessionId === 'admin' || sessionId === 'author' || sessionId === 'superuser';
  },

  hasTopLevelClearance: function() {
    var sessionId = get(Session, 'permissionLevel');
    return sessionId === 'admin' || sessionId === 'superuser';
  }

});