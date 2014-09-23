import Ember from "ember";

var set = Ember.set,
    get = Ember.get;

var ArticleRoute = Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      article: this.store.find('article', {slug: params.slug})
    });
  },

  setupController: function(controller, model){
    var article = get(model, 'article');
    console.log(article.content[0]);
    controller.set('content', article.content[0]);
  }
});

export default ArticleRoute;