/** @jsx React.DOM */
"use strict";

var React = require('react');
var marked = require('marked');

var Definition = React.createClass({displayName: 'Definition',
  render: function() {
    return (
      React.DOM.div(null, 
        React.DOM.h2(null, this.props.title), 
        React.DOM.blockquote({dangerouslySetInnerHTML: {__html: marked(this.props.children)}})
      )
    );
  }
});

module.exports = Definition;
