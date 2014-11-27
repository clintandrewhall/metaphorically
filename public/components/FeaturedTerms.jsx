/** @jsx React.DOM */
"use strict";

var React = require('react'),
  Router = require('react-router'),
  Term = require('./Term');

var FeaturedTerms = React.createClass({
  mixins: [ Router.State ],
  render: function() {
    return (
      <div className="col span_9_of_12">
        <h2 className="featured-title"><span>Featured Metaphors</span></h2>
        <div className="section group">
          <span className="col span_1_of_12" />
          <Term summary={true} termId="exploit" />
          <span className="col span_1_of_12" />
          <Term summary={true} termId="cookie" />
          <span className="col span_1_of_12" />
          <Term summary={true} termId="defragmenting" />
        </div>
      </div>
    );
  }
});

module.exports = FeaturedTerms;
