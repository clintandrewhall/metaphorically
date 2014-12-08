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
        <div className="gallery autoplay items-3">
          <div id="item-1" className="control-operator"></div>
          <div id="item-2" className="control-operator"></div>
          <div id="item-3" className="control-operator"></div>
          <figure className="item">
            <Term summary={true} termId="exploit" />
          </figure>
          <figure className="item">
            <Term summary={true} termId="cookie" />
          </figure>
          <figure className="item">
            <Term summary={true} termId="defragmenting" />
          </figure>
          <div className="controls">
            <a href="#item-1" className="control-button">1</a>
            <a href="#item-2" className="control-button">2</a>
            <a href="#item-3" className="control-button">3</a>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = FeaturedTerms;
