/** @jsx React.DOM */
"use strict";

var React = require('react'),
  Router = require('react-router'),
  RouteHandler = Router.RouteHandler;

var Nav = React.createClass({
  render: function() {
    return (
      <nav {...this.props} className="master-nav section group">
        <ul className="master-nav-links">
          <li className="master-nav-link"><a href="#">Metaphors</a></li>
          <li className="master-nav-link"><a href="#">Contribute a Metaphor</a></li>
          <li className="master-nav-link"><a href="#">About</a></li>
          <li className="master-nav-link"><a href="#">Contact</a></li>
        </ul>
      </nav>
    );
  }
});

module.exports = Nav;
