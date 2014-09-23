import Ember from "ember";

var set = Ember.set;

export default Ember.TextField.extend({
  type: 'file',
  attributeBindings: ['multiple'],
  multiple: false,
  change: function(e) {
    var input = e.target;
    if (!Ember.isEmpty(input.files)) {
      //todo: needs to pull currentPath to use appropriate controller this is hackish just to get images uploading to work
      var controller = this.container.lookup('controller:admin.photos');
      console.log(input.files[0]);
      set(controller, 'files', input.files[0]);
    }
  }
});