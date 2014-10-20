/** @jsx React.DOM */
"use strict";

var React = require('react');

var Metaphor = React.createClass({
  render: function() {
    return (
      <article className="metaphor">
        {this.props.children}
      </article>
    );
  }
});

module.exports = Metaphor;
