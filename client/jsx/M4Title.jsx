/** @jsx React.DOM */
"use strict";

var React = require('react');

var M4Title = React.createClass({
  render: function() {
    return (
      <h3 className="m4Title">{this.props.children}</h3>
    );
  }
});

module.exports = M4Title;
