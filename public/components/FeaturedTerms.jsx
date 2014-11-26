/** @jsx React.DOM */
"use strict";

var React = require('react'),
  Router = require('react-router'),
  Term = require('./Term');

var FeaturedTerms = React.createClass({
  mixins: [ Router.State ],
  render: function() {
    return (
      <div className="col span_8_of_12">
        <h2 className="featured-title"><span>Featured Metaphors</span></h2>
        <div className="section group">
          <Term summary={true} termId="exploit" />
          <Term summary={true} termId="cookie" />
          <Term summary={true} termId="defragmenting" />
          <Term summary={true} termId="router" />
          </div>
        <div className="section group">
          <Term summary={true} termId="open-source" />
          <Term summary={true} termId="server" />
          <Term summary={true} termId="phishing" />
          <Term summary={true} termId="vpn" />
        </div>
      </div>
    );
  }
});

module.exports = FeaturedTerms;
