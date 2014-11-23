'use strict';
require('node-jsx').install({extension: '.jsx'});

var path = require('path'),
  url = require('url'),
  connect = require('connect'),
  React = require('react'),
  ReactAsync = require('react-async'),
  serveStatic = require('serve-static'),
  /*webpack = require('webpack'),
  webpackDevMiddleware = require("webpack-dev-middleware"),*/
  App = require('./public/components/App'),
  web = connect(),
  url = require('url');

var port = process.env.PORT || 5000;
web.use(serveStatic('public'));
web.use(
  function(req, res, next) {
    try {
      var path = url.parse(req.url).pathname
      var app = App({path: path})
      var markup = React.renderToString(app);
      res.end(markup)
    } catch(err) {
      return next(err)
    }
  }
);
web.listen(port, function() {
  console.log('Listening on ' + port);
});


/*var compiler = webpack({
  entry: __dirname + '/public/components/App.jsx',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: [
    'src',
    'dist',
    'public',
    'components',
    'scripts',
    'stylesheets',
    'node_modules'
    ],
    // Allow to omit extensions when requiring these files
    extensions: ['', '.js', '.jsx']
  },
  module: {
    plugins: [
      new webpack.dependencies.LabeledModulesPlugin()
    ],
    loaders: [
      { test: /\.css$/, loader: "style!css" },
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

app.use(webpackDevMiddleware(compiler, {
  publicPath: "/bundle/"
}));
*/
