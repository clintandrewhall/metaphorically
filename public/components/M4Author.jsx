/** @jsx React.DOM */
"use strict";

var React = require('react'),
  marked = require('marked');

var M4Author = React.createClass({
  render: function() {
    return (
      <cite className="m4-cite">
        <a href={this.props.href}>{this.props.handle}</a>
      </cite>
    );
  }
});

module.exports = M4Author;
