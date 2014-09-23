import Ember from "ember"

export default Ember.View.extend({
  attributeBindings: ['src', 'class'],
  tagName: 'img',
});