/**
 * @jsx React.DOM
 */
"use strict";

var React = require('react'),
  App = require('./App.jsx');

var Client = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <link rel="stylesheet" href="/public/css/style.css" />
        </head>
        <body>
          <App library={this.props.library} path={this.props.path} />
          <script src='//localhost:3000/browser-sync/browser-sync-client.1.5.8.js'></script>
        </body>
      </html>
    );
  }
});

module.exports = Client;

if (typeof window !== 'undefined') {
  window.onload = function() {
    React.renderComponent(Client(), document);
  };
}
