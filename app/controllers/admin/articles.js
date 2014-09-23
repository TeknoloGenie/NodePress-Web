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

  mediaArray: [
    {name: 'one'},
    {name: 'two'},
    {name: 'three'}
  ],

  articleStatusTypes: ['Draft', 'Scheduled', 'Private', 'Published'],

//  NEW POST VARIABLES

  articleTitle: undefined,

  articleHeading: undefined,

  articleStatus: undefined,

  articleBody: undefined,

//  POST EDIT VARIIABLES

  articleEditTitle: undefined,

  articleEditHeading: undefined,

  articleEditStatus: undefined,

  articleEditBody: undefined,

  selectedArticle: {},

  selectedArticleDidChange: function(){
    var article = get(this, 'selectedArticle');
    set(this, 'articleEditBody', get(article, 'body'));
    set(this, 'articleEditHeading', get(article, 'heading'));
  }.observes('selectedArticle'),
  //todo: when select value has been changed, create a observer that updates the formTitle's all articles content into the form for editing

  articleData: function() {
    var title = get(this, 'articleTitle'),
        heading = get(this, 'articleHeading'),
        body = get(this, 'articleBody'),
        status = get(this, 'articleStatus'),
        slug = title.dasherize(),
        coverPhoto = get(this, 'articleMedia');

    return {
      title: title,
      heading: heading,
      status: status,
      body: body,
      slug: slug,
      attachment: coverPhoto
    };
  }.property('articleTitle', 'articleHeading', 'articleBody', 'articleStatus'),

  articleEditData: function() {
    var heading = get(this, 'articleEditHeading'),
        body = get(this, 'articleEditBody'),
        status = get(this, 'articleEditStatus');

    return {
      heading: heading,
      status: status,
      body: body
    };
  }.property('articleEditStatus', 'articleEditHeading', 'articleEditBody'),

  actions: {
    createArticle: function() {
      var articleData = get(this, 'articleData');

      //todo: convert to normal createRecord('Article', {key:value, key1,value1}
      var article = this.store.createRecord('Article', articleData);

      article.save().then(function () {
        alert('article created!');
      });
    },

    updateArticle: function() {
      var articleID = parseInt(get(this, 'selectedArticle.id')),
          self = this;

      this.store.find('Article', articleID).then(setNewArticleData);

      function setNewArticleData(article) {
        set(article, 'heading', get(self, 'articleEditHeading'));
        set(article, 'body', get(self, 'articleEditBody'));
        set(article, 'status', get(self, 'articleEditStatus'));
        article.save();
      }
    },

    edit: function () {
      alert('needs to go to edit tab');
    },

    remove: function () {
      alert('needs to delete user and remove record');
    }
  }

});
