/** @jsx React.DOM */
"use strict";
require('node-jsx').install({extension: '.jsx'});

var React = require('react');

var MainPage = React.createClass({
  render: function() {
    return (
      <nav className="three column sidebar">
        <ul className="menu">
        {
          this.props.library.getTermList().map(function(term) {
            return <li key={term.id} className="menuItem"><a href={term.href}>{term.title}</a></li>;
          })
        }</ul>
      </nav>
    );
  }
});

module.exports = MainPage;
