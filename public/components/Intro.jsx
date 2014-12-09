/** @jsx React.DOM */

"use strict";

var React = require('react');

var Intro = React.createClass({
  render: function() {
    return (
      <article className="section intro">
        <header className="intro-header">
          <h2 className="intro-heading">So what is <span className="domain">metaphorical</span><span className="suffix">.ly </span>?</h2>
        </header>
        <p>
          <span className="domain">metaphorical</span><span className="suffix">.ly</span>
          <span> encourages everyone to begin to demystify technology by breaking it down into simple metaphors. By doing so, we'll begin to see technology not as sorcery or alchemy, but as simple interactions with things designed by people.</span>
        </p>
      </article>
    );
  }
});

module.exports = Intro;
