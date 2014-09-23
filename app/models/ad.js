import DS from "ember-data";

export default DS.Model.extend({

  placement: DS.attr('string'),

  script: DS.attr('string')

});