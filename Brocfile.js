/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

/* Ember Data Adapter */
app.import('vendor/ember-localstorage-adapter/localstorage_adapter.js');

module.exports = app.toTree();
