import DS from "ember-data";

export default DS.Model.extend({

  title: DS.attr('string'),

  author: DS.belongsTo('user'),

  slug: DS.attr('string'),

  status: DS.attr('string'),

  coverPhoto: DS.attr('string'),

  heading: DS.attr('string'),

  body: DS.attr('string'),

  categories: DS.hasMany('category'),

  tags: DS.hasMany('tag'),

  createdAt: DS.attr('string', {
    defaultValue: function() { return  new Date(); }
  }),

  datePublished: DS.attr('string'),

  comments: DS.hasMany('comment')

});