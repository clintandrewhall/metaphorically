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

    if (!this.state || !this.state.termId) {
      content = <FeaturedTerms />;
    }

    return (
      <main className="term section group">
        <div className="col span_3_of_12">
          <TermNav />
        </div>
        {content}
      </main>
    );
  }
});

module.exports = Terms;
