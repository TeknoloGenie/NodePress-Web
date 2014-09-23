import Ember from "ember";
import Session from "../../controllers/session";

var get = Ember.get,
    set = Ember.set;

export default Ember.ArrayController.extend({

  hasClearance: function() {
    var sessionId = get(Session, 'permissionLevel');
    return sessionId === 'admin' || sessionId === 'author' || sessionId === 'superuser';
  },

  hasTopLevelClearance: function() {
    var sessionId = get(Session, 'permissionLevel');
    return sessionId === 'admin' || sessionId === 'superuser';
  },

  url: '',

  description: '',

  keywords: '',

  fileDidChange: function(){
    console.log('file changed');
  }.observes('files'),

  actions: {

    upload: function() {
      var alt = get(this, 'alt'),
          keywords = get(this, 'keywords'),
          files = this.get('files');
      console.log(files);
      var uploader = Ember.Uploader.create({
        url: 'http://localhost:1337/photos'
      });

      if (!Ember.isEmpty(files)) {
        uploader.upload(files, {alt: alt, keywords: keywords});
      }
    },

    edit: function() {

    },

    trash: function() {

    }

  }

})