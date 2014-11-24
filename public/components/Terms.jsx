/** @jsx React.DOM */
"use strict";

var React = require('react'),
  Router = require('react-router'),
  RouteHandler = Router.RouteHandler,
  TermNav = require('./TermNav');

var Terms = React.createClass({

  render: function() {
    return (
      <main className="term section group">
        <div className="col span_3_of_12">
          <TermNav />
        </div>
        <RouteHandler />
      </main>
    );
  }
});

module.exports = Terms;
