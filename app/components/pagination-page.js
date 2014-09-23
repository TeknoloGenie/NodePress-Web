import Ember from "ember";

var get = Ember.get;

export default Ember.Component.extend({

  tagName: 'li',

  classNameBindings: 'isCurrent:disabled',

  isCurrent: function() {
    return get(this, 'currentPage') === get(this, 'page');
  }.property('currentPage', 'page'),

  actions: {

    pageClicked: function() {
      get(this, 'parentView').send('goToPage', get(this, 'page'));
    }

  }

});