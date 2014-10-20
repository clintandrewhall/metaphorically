/** @jsx React.DOM */

"use strict";

var React = require('react'),
  Nav = require('./Nav');

var MainPage = React.createClass({displayName: 'MainPage',
  render: function() {
    return (
      React.DOM.div({className: "MainPage"}, 
        Nav({library: this.props.library})
      )
    );
  }
});

module.exports = MainPage;
