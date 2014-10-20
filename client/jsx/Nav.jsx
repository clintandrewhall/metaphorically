/** @jsx React.DOM */
"use strict";
require('node-jsx').install({extension: '.jsx'});

var React = require('react');

var MainPage = React.createClass({
  render: function() {
    return (
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
        {
          this.props.library.getTermList().map(function(term) {
            return <li key={term.id}><a href={term.href}>{term.title}</a></li>;
          })
        }</ul>
      </nav>
    );
  }
});

module.exports = MainPage;
