/** @jsx React.DOM */
"use strict";

var React = require('react'),
  ReactAsync = require('react-async'),
  reactdown = require('reactdown'),
  Nav = require('./Nav'),
  superagent = require('superagent'),
  fs = require('fs'),
  reactdown = require('reactdown');

function getTerm(id, cb) {
  superagent.get(
    'http://localhost:8000/async/' + id,
    function(err, res) {
      cb(err, res ? {term: res.body} : null);
    }
  );
}

var Term = React.createClass({
  mixins: [ReactAsync.Mixin],

  getInitialStateAsync: function(cb) {
    getTerm(this.props.termId, cb);
  },

  componentWillReceiveProps: function(nextProps) {
    if (this.props.termId !== nextProps.termId) {
      getTerm(nextProps.termId, function(err, term) {
        if (err) {
          throw err;
        }
        this.setState({term: term});
      }.bind(this));
    }
  },

  render: function() {
    if (this.state.term && this.state.term.id) {
      var code = require(this.state.term.path);
      return (
        <div>
          <Nav library={this.props.library} />
          <h2>{this.state.term.title}</h2>
          {code({term: this.state.term})}
        </div>
      );
    }
    return (
      <div className="NotFound" />
    );
  }
});

module.exports = Term;
