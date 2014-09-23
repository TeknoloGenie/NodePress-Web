import Ember from "ember";

var get = Ember.get,
    set = Ember.set,
    gt = Ember.computed.gt,
    alias = Ember.computed.alias;

export default Ember.Component.extend({

  hasPrevious: function(){
    return get(this, 'page') > 1;
  }.property('page'),

  hasNext: function(){
    return get(this, 'page') < get(this, 'pages');
  }.property('page', 'pages'),

  showPagination: gt('pages', 1),

  lastPage: alias('pages'),

  visiblePages: function() {

    var pages = get(this, 'pages');
    var page  = get(this, 'page');

    var limit = 5;

    if (pages < 5) {
      limit = pages;
    }

    var finish = function(start,limit) {
      return start + limit - 1;
    };

    var start = page - parseInt(limit / 2);

    if (finish(start, limit) > pages) {
      start = pages - limit + 1;
    }

    if (start < 1) {
      start = 1;
    }

    return [start, finish(start,limit)];

  }.property('page', 'pages'),

  showBeforeElipsis: function() {
    return get(this, 'visiblePages.firstObject') > 3;
  }.property('visiblePages.[]'),

  showAfterElipsis: function() {
    return Math.abs(get(this, 'lastPage') - get(this, 'visiblePages.lastObject')) > 2;
  }.property('visiblePages.[]', 'lastPage'),

  actions: {

    goToNextPage: function() {
      if (get(this, 'hasNext')) {
        this.incrementProperty('controller.page');
      }
    },

    goToPreviousPage: function() {
      if ( get(this,'hasPrevious')) {
        this.decrementProperty('controller.page');
      }
    },

    goToPage: function(pageNumber) {
      if (pageNumber >= 1 && pageNumber <= get(this, 'lastPage')){
        set(this, 'controller.page', pageNumber);
      }
    }
  }



});