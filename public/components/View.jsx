/** @jsx React.DOM */

"use strict";

var React = require('react');

var View = React.createClass({
  render: function() {
    return (
      <section className="section view">
        <header class="view-header">
          <h2><a href="/term">View the Metaphors</a></h2>
        </header>
      </section>
    );
  }
});

module.exports = View;
