/**
 * @jsx React.DOM
 */
"use strict";

var React = require('react'),
  Router = require('react-router');

var App = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <title>Metaphorical.ly</title>
        </head>
        <body>
          <div id="content">
            {/* this is the important part */}
            <RouteHandler />
          </div>
          <script src="/bundle/bundle.js"></script>
        </body>
      </html>
    );
  }
});

module.exports = App;
