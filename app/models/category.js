import DS from "ember-data";

export default DS.Model.extend({

  category: DS.attr('string'),

  slug: DS.attr('string'),

  posts: DS.hasMany('article')

});