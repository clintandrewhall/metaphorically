/** @jsx React.DOM */
"use strict";

var React = require('react');
var marked = require('marked');

var Definition = React.createClass({
  render: function() {
    return (
      <div id={this.props.term.id} className="definition">
        <h2>{this.props.title}</h2>
        <blockquote dangerouslySetInnerHTML={{__html: marked(this.props.children)}} />
      </div>
    );
  }
});

module.exports = Definition;
