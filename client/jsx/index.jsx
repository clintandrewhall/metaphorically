/**
 * @jsx React.DOM
 */
"use strict";

var React = require('react'),
  App = require('./App');

var Client = React.createClass({
  render: function() {
    return (
      <body>
        <App library={this.props.library} path={this.props.path} />
        <script src='//localhost:3000/browser-sync/browser-sync-client.1.5.8.js'></script>
      </body>
    );
  }
});

module.exports = Client;

if (typeof window !== 'undefined') {
  window.onload = function() {
    React.renderComponent(Client(), document);
  };
}
