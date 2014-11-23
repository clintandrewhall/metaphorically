/** @jsx React.DOM */
"use strict";

var React = require('react'),
  ReactAsync = require('react-async'),
  fs = require('fs'),
  manifest = require('../../terms/js/manifest.json'),
  Titlebar = require('./Titlebar'),
  Nav = require('./Nav');

function getTerm(id, cb) {
  require.ensure([], function() {
    var term = require('./../../terms/js/' + id);
    return cb(null, term);
  })
}

var Term = React.createClass({
  componentWillMount: function() {
    getTerm(this.props.termId, function(err, term) {
      if (err) {
        throw err;
      }
      this.setState({term: term});
    }.bind(this));
  },

  render: function() {
    if (this.state && this.state.term) {
      var MyComponent = React.createFactory(this.state.term);
      return (
        <div className="term">
          <Titlebar />
          <Nav />
          <h3 className="term-title">{this.state.term.title}</h3>
          <main className="main">
            <MyComponent term={manifest[this.props.termId]} />
          </main>
        </div>
      );
    }
    return (
      <div className="NotFound" />
    );
  }
});

module.exports = Term;
