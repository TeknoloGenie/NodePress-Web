/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import('vendor/lib/bootstrap.js');
app.import('vendor/lib/ember-typeahead.js');
app.import('vendor/lib/moment.js');
app.import('vendor/lib/typeahead.js');

app.import('bower_components/ic-styled/main.js');
app.import('bower_components/ember-utils/dist/globals/main.js');
app.import('bower_components/ember-components/dist/globals/main.js');
app.import('bower_components/ember-uploader/dist/ember-uploader.js');


app.import('vendor/styles/normalize.css');
app.import('vendor/styles/bootstrap.css');
app.import('vendor/styles/nodepress.css');

module.exports = app.toTree();
