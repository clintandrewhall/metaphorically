/** @jsx React.DOM */
"use strict";

var React = require('react');

var Metaphor = React.createClass({
  render: function() {
    return (
      <article className="metaphor" id={this.props.id}>
        {this.props.children}
      </article>
    );
  }
});

module.exports = Metaphor;
