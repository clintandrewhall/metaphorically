/** @jsx React.DOM */
"use strict";

var React = require('react');
var marked = require('marked');

var Definition = React.createClass({
  render: function() {
    return (
      <div className="definition" id="definition">
        <blockquote>{this.props.children}</blockquote>
        <cite className="m4Cite">
          — <a href={this.props.href}>{this.props.source}</a>
        </cite>
      </div>
    );
  }
});

module.exports = Definition;
