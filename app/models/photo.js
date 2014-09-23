import DS from "ember-data";

export default DS.Model.extend({

  url: DS.attr('string'),

  alt: DS.attr('string'),

  keywords: DS.attr('array'),

  dateUploaded: DS.attr('string')

});