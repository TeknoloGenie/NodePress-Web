import Ember from "ember";

var get = Ember.get;

export default Ember.Route.extend({

  model: function() {
    return Ember.RSVP.hash({
      setting: this.store.find('setting', 1),
      ad: this.store.find('ad')//,
//      tag: this.store.find('tag'), -------------------------->Need to implement still
//      category: this.store.find('category')   --------------->Need to implement still
    });
  },

  setupController: function(controller, model) {
    var ads = get(model, 'ad');
    console.log(ads);
    controller.set('ads', ads);
  }

});
