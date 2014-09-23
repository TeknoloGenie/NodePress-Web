import Ember from "ember";

var ArticlesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('article');
  },

  renderTemplate: function() {
    this._super();
    this.render('articles', {
      outlet: 'main',
      into: 'application'
    });
  }
});

export default ArticlesRoute;