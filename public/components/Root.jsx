/**
* @jsx React.DOM
*/
"use strict";

var React = require('react'),
  Router = require('react-router');

var Root = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <title>Metaphorical.ly</title>
        </head>
        <body>
          <div id="content">
            {this.props.children}
          </div>
          <script src="/bundle/bundle.js"></script>
        </body>
      </html>
    );
  }
});

if (typeof window !== 'undefined') {
  window.onload = function() {
    Router.run(
      require('./routes'),
      document.location.pathName,
      function (Handler, state) {
        React.render(Root(null, Handler()), document.getElementById('content'));
      }
    );

  }
}

module.exports = Root;
