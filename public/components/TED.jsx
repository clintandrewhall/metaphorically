/** @jsx React.DOM */

"use strict";

var React = require('react');

var TED = React.createClass({
  render: function() {
    return (
      <section className="section ted">
        <blockquote className="ted-quote">
          Technology understanding people has trumped people understanding technology. As a result, what was once
          an Art or a Science has become Sorcery or Alchemy.
        </blockquote>
      </section>
    );
  }
});

module.exports = TED;
