/** @jsx React.DOM */
"use strict";

var React = require('react'),
  marked = require('marked');

var M4Content = React.createClass({
  render: function() {
    return (
      <section className="m4Content">
        {this.props.children}
      </section>
    );
  }
});

module.exports = M4Content;
