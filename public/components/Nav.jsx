/** @jsx React.DOM */
"use strict";

var React = require('react'),
  Router = require('react-router-component'),
  Link = Router.Link;

var Nav = React.createClass({
  render: function() {
    return (
      <nav {...this.props}>
        <Link href="/term/cache">Cache</Link>
      </nav>
    );
  }
});

module.exports = Nav;
