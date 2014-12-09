/** @jsx React.DOM */
"use strict";

var React = require('react'),
  Term = require('./Term');

var FeaturedTerms = React.createClass({
  render: function() {
    return (
      <section className="featured">
        <header className="featured-header">
          <h2 className="featured-heading">Featured Metaphors</h2>
        </header>
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
      </section>
    );
  }
});

module.exports = FeaturedTerms;
