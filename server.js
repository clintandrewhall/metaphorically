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

function getAsync(library) {
  var router = express.Router();
  router.use(function(req, res, next) {
    var id = req.path.split('/').pop(),
      topic = library.getTopicById(id);
    if (topic) {
      res.send(topic);
    } else {
      next();
    }
  });
  return router;
}

var app = express();

if (development) {
  app.get('/assets/bundle.js',
    browserify('./client', {
      debug: true,
      watch: true
    })
  );
}

Metaphors.buildLibrary('/lib/metaphors', function(err, library) {
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
    .listen(3000, function() {
      console.log('Point your browser at http://localhost:3000');
    });
});
