'use strict';

var path = require('path'),
  url = require('url'),
  express = require('express'),
  browserify = require('connect-browserify'),
  ReactAsync = require('react-async'),
  nodejsx = require('node-jsx').install(),
  App = require('./client'),
  Metaphors = require('./metaphors');

var development = process.env.NODE_ENV !== 'production';

function renderApp(req, res, next) {
  var path = url.parse(req.url).pathname;
  var app = App({
    path: path
  });
  ReactAsync.renderComponentToStringWithAsyncState(app, function(err, markup) {
    if (err) {
      return next(err);
    }
    res.send('<!doctype html>\n' + markup);
  });
}

var app = express();

if (development) {
  app.get('/assets/bundle.js',
    browserify('./client', {
      debug: true,
      watch: true
    }));
}

app
  .use('/assets', express.static(path.join(__dirname, 'assets')))
  .use(renderApp);

Metaphors.buildLibrary('/lib/metaphors', function(err, library) {
  app.listen(3000, function() {
    console.log('Point your browser at http://localhost:3000');
  });
});
