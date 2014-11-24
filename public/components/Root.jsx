/**
* @jsx React.DOM
*/
"use strict";

var React = require('react'),
  Router = require('react-router'),
  RouteHandler = Router.RouteHandler,
  Titlebar = require('./Titlebar'),
  Nav = require('./Nav');

var Root = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <title>Metaphorical.ly</title>
          <link href='http://fonts.googleapis.com/css?family=Oswald:400,300,700' rel='stylesheet' type='text/css' />
          <link href='http://fonts.googleapis.com/css?family=Patua+One' rel='stylesheet' type='text/css' />
          <link href='http://fonts.googleapis.com/css?family=Lato:400,400italic' rel='stylesheet' type='text/css' />
          <link rel="stylesheet" href="/css/grid/html5reset.css" />
          <link rel="stylesheet" href="/css/grid/col.css" />
          <link rel="stylesheet" href="/css/grid/12cols.css" />
          <link rel="stylesheet" href="/css/style.css" />
        </head>
        <body>
          <div id="content">
            <Titlebar />
            <Nav />
            <RouteHandler />
          </div>
        {/*<script src="/bundle/bundle.js"></script>*/}
        </body>
      </html>
    );
  }
});

/*if (typeof window !== 'undefined') {
  window.onload = function() {
    Router.run(
      require('./routes'),
      document.location.pathName,
      function (Handler, state) {
        React.render(Root(null, Handler()), document.getElementById('content'));
      }
    );

  }
}*/

module.exports = Root;
