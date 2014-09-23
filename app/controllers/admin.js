import Ember from "ember";
import Session from "../controllers/session";

var get = Ember.get;

export default Ember.ObjectController.extend({

  permissionLevel: undefined,

  hasClearance: function() {
    var sessionId = get(Session, 'permissionLevel');
    return sessionId === 'admin' || sessionId === 'author' || sessionId === 'superuser';
  }.property('permissionLevel'),

  hasTopLevelClearance: function() {
    var sessionId = get(Session, 'permissionLevel');
    return sessionId === 'admin' || sessionId === 'superuser';
  }.property('permissionLevel')

});