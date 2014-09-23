import Ember from "ember";
import Paginatable from "../../mixins/paginatable";
import Session from "../../controllers/session";

var get = Ember.get;

export default Ember.ArrayController.extend(Paginatable, {

  hasClearance: function() {
    var sessionId = get(Session, 'permissionLevel');
    return sessionId === 'admin' || sessionId === 'author' || sessionId === 'superuser';
  },

  hasTopLevelClearance: function() {
    var sessionId = get(Session, 'permissionLevel');
    return sessionId === 'admin' || sessionId === 'superuser';
  },

  sortProperties: [],

  sortAscending: true,

  page: 1,

  perPage: 10,

  availablePageCounts: [5, 10, 15, 25, 50, 100, 250, 500, 1000],

  availableUserTypes: ['Author', 'Admin', 'User'],

  userUsername: null,

  userFirstName: null,

  userLastName: null,

  userPassword: null,

  userEmail: null,

  userUserType: null,

  userSignupData: function() {
    return {
      username: get(this, 'userUsername'),
      firstName: get(this, 'userFirstName'),
      lastName: get(this, 'userLastName'),
      password: get(this, 'userPassword'),
      email: get(this, 'userEmail'),
      type: get(this, 'userUserType')

    };
  }.property('userUsername', 'userPassword', 'userLastName', 'userFirstName', 'userEmail', 'userUserType'),

  userEditData: function() {
    return {
      username: get(this, 'userEditUsername'),
      firstName: get(this, 'userEditFirstName'),
      lastName: get(this, 'userEditLastName'),
      password: get(this, 'userEditPassword'),
      email: get(this, 'userEditEmail'),
      type: get(this, 'userEditUserType')

    };
  }.property('userEditUsername', 'userEditPassword', 'userEditLastName', 'userEditFirstName', 'userEditEmail', 'userEditUserType'),

  selectedUser: {},

  selectedUserDidChange: function(){
    alert('snaps');
  }.observes('selectedUser'),

  actions: {
    createUser: function() {
      var signupData = get(this, 'userSignupData');
      var user = this.store.createRecord('User', signupData);
      user.save().then(function(){
        alert('user created!');
      });
    },

    edit: function () {

    },

    remove: function () {
      alert('needs to delete user and remove record');
    },

    sort: function(property) {
      if (this.get('isSorted') && (this.get('sortProperties')[0] === property)) {
        this.toggleProperty('sortAscending');
      } else {
        this.set('sortProperties', [property]);
        this.set('sortAscending', true);
      }
    }
  }

});