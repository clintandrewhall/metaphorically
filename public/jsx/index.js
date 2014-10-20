/**
 * @jsx React.DOM
 */
"use strict";

var React = require('react'),
  App = require('./App');

var Client = React.createClass({displayName: 'Client',
  render: function() {
    return (
      React.DOM.html(null, 
        React.DOM.head(null, 
          React.DOM.link({rel: "stylesheet", href: "/public/css/base.css"}), 
          React.DOM.link({rel: "stylesheet", href: "/public/css/skeleton.css"}), 
          React.DOM.link({rel: "stylesheet", href: "/public/css/layout.css"}), 
          React.DOM.link({rel: "stylesheet", href: "/public/css/style.css"})
        ), 
        React.DOM.body(null, 
          App({library: this.props.library, path: this.props.path}), 
          React.DOM.script({src: "//localhost:3000/browser-sync/browser-sync-client.1.5.8.js"})
        )
      )
    );
  }
});

module.exports = Client;

if (typeof window !== 'undefined') {
  window.onload = function() {
    React.renderComponent(Client(), document);
  };
}
