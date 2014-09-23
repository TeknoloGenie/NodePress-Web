import Ember from "ember";

export default Ember.Object.extend({
  init: function() {
    this._super();
    this.set('token', localStorage.auth_token);
    this.set('id', localStorage.auth_account_id);
    this.set('permissionLevel', localStorage.auth_account_type);
  },

  testProperty: 'testing',

  token: undefined,

  id: undefined,

  permissionLevel: undefined,

  tokenChanged: function() {
    localStorage.auth_token = this.get('token');
  }.observes('token'),

  permissionLevelChanged: function() {
    localStorage.auth_account_type = this.get('permissionLevel');
  }.observes('permissionLevel'),

  idChanged: function() {
    localStorage.auth_account_id = this.get('id');
  }.observes('id')
}).create();
