/** @jsx React.DOM */
"use strict";

var React = require('react'),
  Router = require('react-router'),
  RouteHandler = Router.RouteHandler,
  TermNav = require('./TermNav'),
  FeaturedTerms = require('./FeaturedTerms');

var Terms = React.createClass({
  mixins: [ Router.State ],
  propTypes: {
    termId: React.PropTypes.string
  },
  getInitialState: function() {
    var termId = this.props.termId;
    if (!termId) {
      termId = this.getParams().termId;
    }
    return {
      termId: termId
    }
  },
  render: function() {
    var content = <RouteHandler />;
    return (
      <main className="term">
        <TermNav />
        {content}
      </main>
    );
  }
});

module.exports = Terms;
