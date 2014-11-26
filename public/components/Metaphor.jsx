/** @jsx React.DOM */
"use strict";

var React = require('react');

var Metaphor = React.createClass({
  propTypes: {
    summary: React.PropTypes.bool
  },
  getDefaultProps: function() {
    return {
      image: 'default',
      summary: false
    };
  },
  render: function() {
    var style = {
      //backgroundImage: 'url("/images/headers/' + (this.props.summary ? '100' : '150') + '/' + this.props.image + '.png")'
      backgroundImage: 'url("/images/headers/150/' + this.props.image + '.png")'
    };

    var title = this.props.children[0];

    return (
      <article style={style} className={'metaphor' + (this.props.summary ? '' : ' col span_8_of_12')} id={this.props.id}>
        {this.props.summary ? title : this.props.children}
      </article>
    );
  }
});

module.exports = Metaphor;
