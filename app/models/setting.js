import DS from "ember-data";

export default DS.Model.extend({

  name: DS.attr('string'),

  slogan: DS.attr('string'),

  URL: DS.attr('string'),

  administratorEmail: DS.attr('string'),

  timezone: DS.attr('string')

});