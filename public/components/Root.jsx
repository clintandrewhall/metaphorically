/**
* @jsx React.DOM
*/
"use strict";

var React = require('react'),
  App = require('./App');

var Root = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <title>Metaphorical.ly</title>
        </head>
        <body>
          <div id="content">
            <App path={this.props.path} />
          </div>
          <script src="/bundle/bundle.js"></script>
        </body>
      </html>
    );
  }
});

module.exports = Root;
