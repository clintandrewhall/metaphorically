'use strict';
require('node-jsx').install({extension: '.jsx'});

var path = require('path'),
  url = require('url'),
  express = require('express'),
  browserify = require('connect-browserify'),
  ReactAsync = require('react-async'),
  App = require('./public/jsx'),
  Metaphors = require('./metaphors');

function getAsync(library) {
  var router = express.Router();
  router.use(function(req, res, next) {
    var id = req.path.split('/').pop(),
      term = library.getTermById(id);
    if (term) {
      res.send(term);
    } else {
      next();
    }
  });
  return router;
}


var app = express();

Metaphors.buildLibrary('/public/md', function(err, library) {
  app
    .use('/public', express.static(path.join(__dirname, 'public')))
    .use('/async', getAsync(library))
    .use(function renderApp(req, res, next) {
      var path = url.parse(req.url).pathname;
      var app = App({
        library: library,
        path: path
      });
      ReactAsync.renderComponentToStringWithAsyncState(app, function(err, markup) {
        if (err) {
          return next(err);
        }
        res.send('<!doctype html>\n' + markup);
      });
    })
    .listen(8000, function() {
      console.log('Point your browser at http://localhost:8000');
    });
});
