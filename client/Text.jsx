/** @jsx React.DOM */

var React = require('react');

var Text = React.createClass({
  render: function() {
    return (
      <div className="Text">
        <h1>I'm some text!</h1>
      </div>
    );
  }
});

module.exports = Text;
