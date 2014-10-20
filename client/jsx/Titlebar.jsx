/**
 * @jsx React.DOM
 */
"use strict";

var React = require('react');

var Titlebar = React.createClass({
  render: function() {
    return (
      <h1><a href="/">metaphorical.ly</a></h1>
    );
  }
});

module.exports = Titlebar;
