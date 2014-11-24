/** @jsx React.DOM */
"use strict";

var React = require('react');

var Metaphor = React.createClass({
  getDefaultProps: function() {
    return {
      image: 'default'
    };
  },
  render: function() {
    var style = {
      backgroundImage: 'url("/images/headers/' + this.props.image + '.gif")'
    };

    return (
      <article style={style} className="metaphor col span_8_of_12" id={this.props.id}>
        {this.props.children}
      </article>
    );
  }
});

module.exports = Metaphor;
