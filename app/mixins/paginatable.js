import Ember from "ember";

var get = Ember.get;

export default Ember.Mixin.create({
  paginatedContent: function() {

    var page = get(this, 'page'),
      perPage = get(this, 'perPage'),
      start = (page - 1 ) * perPage,
      end = page * perPage;

    return get(this, 'arrangedContent').slice(start, end);

  }.property('arrangedContent.[]', 'page', 'perPage'),

  pages: function() {

    var result = parseInt(get(this,'content.length') / get(this,'perPage'));
    if (get(this,'content.length') % get(this,'perPage') > 0) {
      ++result
    }
    return result;

  }.property('content.[]', 'perPage')

})