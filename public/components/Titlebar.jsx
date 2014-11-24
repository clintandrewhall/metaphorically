/**
 * @jsx React.DOM
 */
"use strict";

var React = require('react');

var Titlebar = React.createClass({
  render: function() {
    return (
      <header {...this.props} className="header section group">
        <h1 className="heading"><a href="/"><span className="domain">metaphorical.</span>ly</a></h1>
        <h2 className="subheading">Demystifying Technology without Jargon</h2>
      </header>
    );
  }
});

module.exports = Titlebar;
