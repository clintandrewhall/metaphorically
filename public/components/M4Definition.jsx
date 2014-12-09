/** @jsx React.DOM */
"use strict";

var React = require('react');
var marked = require('marked');

var M4Definition = React.createClass({
  render: function() {
    if (this.props.summary) {
      return null;
    }
    return (
      <div className="m4-definition" id="definition">
        <blockquote>{this.props.children}</blockquote>
        <cite className="m4-cite">
          <a href={this.props.href}>{this.props.source}</a>
        </cite>
      </div>
    );
  }
});

module.exports = M4Definition;
