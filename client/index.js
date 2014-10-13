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
          <script src="/public/js/bundle.js" />
        </head>
        <body>
          <App library={this.props.library} path={this.props.path} />
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
