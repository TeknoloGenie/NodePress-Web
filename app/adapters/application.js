import Ember from "ember";
import DS from "ember-data";

export default DS.RESTAdapter.extend({
//  user: this.store.find('user'),
  host: 'http://localhost:1337',
  headers: {
    "token": localStorage.auth_token,
    "id": localStorage.auth_account_id
  },
  pathForType: function(type) {
    var camelized = Ember.String.camelize(type);
    return Ember.String.pluralize(camelized);
  }
});