/**
* @jsx React.DOM
*/
'use strict';
//require('node-jsx').install({extension: '.jsx'});

var path = require('path'),
  url = require('url'),
  connect = require('connect'),
  React = require('react'),
  ReactAsync = require('react-async'),
  serveStatic = require('serve-static'),
  webpack = require('webpack'),
  webpackDevMiddleware = require("webpack-dev-middleware"),
  Root = React.createFactory(require('./public/components/Root')),
  Router = require('react-router'),
  web = connect(),
  url = require('url'),
  exec = require('child_process').exec;

var port = process.env.PORT || 5000;

/*var compiler = webpack({
  entry: __dirname + '/public/components/index.jsx',
  output: {
    path: __dirname,
    publicPath: "/bundle/",
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: [
    'public',
    'components',
    'scripts',
    'stylesheets',
    'node_modules',
    'terms',
    'js'
    ],
    // Allow to omit extensions when requiring these files
    extensions: ['', '.js', '.jsx', 'json']
  },
  module: {
    plugins: [
      new webpack.dependencies.LabeledModulesPlugin()
    ],
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.json$/, loader: "json-loader" },
      { test: /\.jsx$/, loader: "jsx-loader" },
      {
        test: /\.png$/,
        loader: "url-loader",
        query: { mimetype: "image/png" }
      },
      {
        test: /\.svg$/,
        loader: "url-loader",
        query: { mimetype: "image/svg" }
      },
      { test: /\.ttf|eot|woff$/, loader: "url-loader" },
    ]
  }
});

web.use(webpackDevMiddleware(compiler, {
  publicPath: "/bundle/"
}));*/

web.use(
  function(req, res, next) {
    if (
      req.url.indexOf('images') > 0 ||
      req.url.indexOf('css') > 0 ||
      req.url.indexOf('script') > 0
    ) {
      next();
    } else {
      try {
        Router.run(
          require('./public/components/routes'),
          req.url,
          function (Handler, state) {
            res.end(React.renderToString(Handler()));
          }
        );
      } catch(err) {
        return next(err)
      }
    }
  }
);
web.use(serveStatic('public'));

exec('node build', function(err) {
  if (err) {
    console.log(err);
  } else {
    web.listen(port, function() {
      console.log('Listening on ' + port);
    });
  }
});
