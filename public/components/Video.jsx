/** @jsx React.DOM */

"use strict";

var React = require('react');

var Video = React.createClass({
  render: function() {
    return (
      <section className="section video">
        <header className="video-header">
          <h2 className="video-heading">Watch the Talk</h2>
          <p className="video-subheading"><span>courtesy of </span><br /><a href="http://www.ted.org">TED</a><span> and </span><a href="">TEDxRCW</a></p>
        </header>
        <div className="video-container">
          <iframe src='//www.youtube.com/embed/IwjLylj6GpI' frameBorder="0" allowFullScreen="true"></iframe>
        </div>
      </section>
    );
  }
});

module.exports = Video;
