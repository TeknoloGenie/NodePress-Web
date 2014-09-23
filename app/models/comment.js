import DS from "ember-data";

export default DS.Model.extend({

  text: DS.attr('string'),

  createdAt: DS.attr('string', {
    defaultValue: function() { return  new Date(); }
  }),

  user: DS.belongsTo('user'),

  post: DS.belongsTo('article')

});