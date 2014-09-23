import Ember from 'ember';

var Router = Ember.Router.extend({
  location: NodepressWebENV.locationType
});

Router.map(function() {
  this.route('index');
  this.route('login');
  this.route('signup');
  this.route('article', { path: '/:slug' });
  this.route('articles', {path: '/'});
  this.route('admin', function() {
    this.route('ads');
    this.route('articles');
    this.route('comments');
    this.route('dashboard');
    this.route('login', {path: '/'});
    this.route('users');
    this.route('photos');
    this.route('settings');
  });
});

export default Router;
