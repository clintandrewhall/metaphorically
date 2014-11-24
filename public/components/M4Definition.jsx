/** @jsx React.DOM */
"use strict";

var React = require('react');
var marked = require('marked');

var M4Definition = React.createClass({
  render: function() {
    return (
      <div className="m4-definition col span_3_of_12" id="definition">
        <blockquote>{this.props.children}</blockquote>
        <cite className="m4Cite">
          — <a href={this.props.href}>{this.props.source}</a>
        </cite>
      </div>
    );
  }
});

module.exports = M4Definition;
