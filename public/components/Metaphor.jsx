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
      <div>
        <div className="col span_1_of_12" />
        <article style={style} className="metaphor col span_8_of_12" id={this.props.id}>
          {this.props.children}
        </article>
      </div>
    );
  }
});

module.exports = Metaphor;
