import Ember from "ember";
import Session from "../../controllers/session";

var get = Ember.get,
    set = Ember.set,
    alias = Ember.computed.alias;

export default Ember.ObjectController.extend({

  needs: ['application'],

  title: 'Ads',

  ads: alias('controllers.application.ads'),

  hasClearance: function() {
    var sessionId = get(Session, 'permissionLevel');
    return sessionId === 'admin' || sessionId === 'author' || sessionId === 'superuser';
  },

  hasTopLevelClearance: function() {
    var sessionId = get(Session, 'permissionLevel');
    return sessionId === 'admin' || sessionId === 'superuser';
  },

  availableAds: ['top','sidebar-top', 'sidebar-bottom', 'comments', 'articles'],

  selectedAdDidChange: function(){

    var selectedAd = get(this, 'selectedAd'),
        description = "Select an Ad and we'll let you know a little about where it is and how often it shows up",
        ads = get(this, 'ads'),
        placement = ads.mapBy('placement'),
        i = placement.indexOf(selectedAd);

    set(this, 'script', ads.mapBy('script')[i]);

    if(selectedAd === "top"){

      description = "The <strong>Top Ad</strong> has a <strong>Height of 90px and Width of 100%</strong> and sits " +
          "at the top of every page that has an Article, so the homepage, and every Article.";
    } else if (selectedAd === "sidebar-top") {
      description = "The <strong>Top Sidebar Ad</strong> has a <strong>Height of 300px and Width of 250px</strong> " +
          "and sits on the right sidebar at the top.";
    }  else if (selectedAd === "sidebar-bottom") {
      description = "The <strong>Bottom Sidebar Ad</strong> has a <strong>Height of 300px and Width of 250px</strong> " +
          "and sits on the right sidebar at the bottom.";
    }  else if (selectedAd === "comments") {
      description = "The <strong>Comments Ad</strong> has a <strong>Height of 90px and Width of 100%</strong> this Ad" +
          "is auto generated every 4 comments";
    }  else if (selectedAd === "articles") {
      description = "The <strong>Articles Ad</strong> has a <strong>Height of 90px and Width of 100%</strong> this Ad" +
          "is auto generated every 4 comments";
    }

    set(this, 'selectedAdDescription', description);

  }.observes('selectedAd'),

  selectedAd: 'top',

  selectedAdDescription: 'The Top Ad has a Height of 90px and Width of 100% and sits at the top of every page that has an Article, so the homepage, and every Article.',

  script: '<h2> Place Ad Here! </h2>',

  actions: {

    setAd: function() {

      var selectedAd = get(this, 'selectedAd'),
          script = get(this, 'script'),
          self = this;

      this.store.find('Ad', {placement:selectedAd}).then(setNewAdData);

      function setNewAdData(ad) {
        set(ad.content[0], 'script', get(self, 'script'));
        ad.save();
      }

    }

  }

});