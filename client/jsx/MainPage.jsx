/** @jsx React.DOM */

"use strict";

var React = require('react'),
  Nav = require('./Nav');

var MainPage = React.createClass({
  render: function() {
    return (
      <div className="MainPage">
        <Nav library={this.props.library} />
      </div>
    );
  }
});

module.exports = MainPage;
