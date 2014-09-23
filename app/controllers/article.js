import Ember from "ember";

var get = Ember.get,
    alias = Ember.computed.alias;

export default Ember.ObjectController.extend({

  needs: ['application'],

  ads: alias('controllers.application.ads'),

  topAdScript: function(){
    var ads = get(this, 'ads'),
        topAd = ads.filterBy('placement', 'top');
    return topAd.mapBy('script').toString();
  }.property('ads'),

  sideBarTopAdScript: function(){
    var ads = get(this, 'ads'),
        topAd = ads.filterBy('placement', 'sidebar-top');
    return topAd.mapBy('script').toString();
  }.property('ads'),

  sideBarBottomAdScript: function(){
    var ads = get(this, 'ads'),
        topAd = ads.filterBy('placement', 'sidebar-bottom');
    return topAd.mapBy('script').toString();
  }.property('ads')

});