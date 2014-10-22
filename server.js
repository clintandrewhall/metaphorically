'use strict';
require('node-jsx').install({extension: '.jsx'});

var path = require('path'),
  url = require('url'),
  express = require('express'),
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

Metaphors.buildLibrary('/public/md', { 'writeReactdown': true }, function(err, library) {
  if (err) {
    console.log(err);
  }

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
        res.send('<!doctype html>\n' +
          '<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->\n' +
          '<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->\n' +
          '<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->\n' +
          '<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->\n' +
          '<head>\n' +
          '  <meta charset="utf-8">\n' +
          '  <title>Metaphorical.ly: Demystifying Technology without Jargon</title>\n' +
          '  <meta name="description" content="Upcoming TEDx Talk">\n' +
          '  <meta name="author" content="Clint Andrew Hall - @metaphorical_ly">\n' +
          '  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">\n' +
          '  <!--[if lt IE 9]>\n' +
          '    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>\n' +
          '  <![endif]-->\n' +
          '  <link rel="stylesheet" href="/public/css/base.css" />\n' +
          '  <link rel="stylesheet" href="/public/css/skeleton.css" />\n' +
          '  <link rel="stylesheet" href="/public/css/layout.css" />\n' +
          '  <link rel="stylesheet" href="/public/css/style.css" />\n' +
          '</head>' + markup + '</html>'
        );
      });
    })
    .listen(8000, function() {
      console.log('Point your browser at http://localhost:8000');
    });
});
