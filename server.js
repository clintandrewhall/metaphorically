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
  url = require('url');

var port = process.env.PORT || 5000;

var compiler = webpack({
  entry: __dirname + '/public/components/Root.jsx',
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
}));
web.use(serveStatic('public'));
web.use(
  function(req, res, next) {
    try {
      Router.run(
        require('./public/components/routes'),
        req.path,
        function (Handler, state) {
          var html = React.renderToString(Root(null, Handler()));
          res.end(html);
        }
      );
    } catch(err) {
      return next(err)
    }
  }
);

web.listen(port, function() {
  console.log('Listening on ' + port);
});
