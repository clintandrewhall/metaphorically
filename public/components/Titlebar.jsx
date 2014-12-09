/**
 * @jsx React.DOM
 */
"use strict";

var React = require('react/addons');
var cx = React.addons.classSet;
var Nav = require('./Nav');

var Titlebar = React.createClass({
  render: function() {
    var {className, ...otherProps} = this.props;

    return (
      <header {...otherProps} className="header">
        <div id="title" className="title">
          <h1 className="heading"><a href="/"><span className="domain">metaphorical.</span>ly</a></h1>
          <h2 className="subheading">Demystifying Technology without Jargon</h2>
        </div>
        <Nav />
      </header>
    );
  }
});

module.exports = Titlebar;
