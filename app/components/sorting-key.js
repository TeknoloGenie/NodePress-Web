import Ember from "ember";

export default Ember.Component.extend({
  tagName: 'th',
  classNameBindings: ['isSorted:active', 'isAsc:asc', 'isDesc:desc'],
  isSorted: (function() {
    if (this.get('sortProperties')) {
      return this.get('sortProperties')[0] === this.get('key');
    } else {
      return false;
    }
  }).property('sortProperties'),
  isAsc: (function() {
    return this.get('isSorted') && this.get('sortAscending');
  }).property('isSorted', 'sortAscending'),
  isDesc: (function() {
    return this.get('isSorted') && !this.get('sortAscending');
  }).property('isSorted', 'sortAscending'),
  click: function() {
    this.sendAction('action', this.get('key'));
  }
});