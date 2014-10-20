/**
 * @jsx React.DOM
 */
"use strict";

var React = require('react');

var Titlebar = React.createClass({displayName: 'Titlebar',
  render: function() {
    return (
      React.DOM.h1(null, React.DOM.a({href: "/"}, "metaphorical.ly"))
    );
  }
});

module.exports = Titlebar;
