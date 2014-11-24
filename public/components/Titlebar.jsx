/**
 * @jsx React.DOM
 */
"use strict";

var React = require('react');

var Titlebar = React.createClass({
  render: function() {
    return (
      <header {...this.props} className="header section group">
        <h1 className="heading col span_7_of_12"><a href="/"><span className="domain">metaphorical.</span>ly</a></h1>
        <h2 className="subheading col span_5_of_12">Demystifying Technology without Jargon</h2>
      </header>
    );
  }
});

module.exports = Titlebar;
