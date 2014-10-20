/** @jsx React.DOM */
"use strict";

var React = require('react'),
  ReactAsync = require('react-async'),
  reactdown = require('reactdown'),
  Nav = require('./Nav'),
  superagent = require('superagent');

var Term = React.createClass({
  mixins: [ReactAsync.Mixin],
  statics: {
    getTerm: function(id, cb) {
      superagent.get(
        'http://localhost:8000/async/' + id,
        function(err, res) {
          cb(err, res ? {term: res.body} : null);
        });
    }
  },

  getInitialStateAsync: function(cb) {
    this.type.getTerm(this.props.termId, cb);
  },

  componentWillReceiveProps: function(nextProps) {
    if (this.props.termId !== nextProps.termId) {
      this.type.getTerm(nextProps.termId, function(err, term) {
        if (err) {
          throw err;
        }
        this.setState({term: term});
      }.bind(this));
    }
  },

  render: function() {
    if (this.state.term && this.state.term.id) {
      var it = require('./../md/' + this.state.term.id);
      return (
        <div>
          <Nav library={this.props.library} />
          <h2>{this.state.term.title}</h2>
          {it()}
        </div>
      );
    }
    return (
      <div className="NotFound" />
    );
  }
});

module.exports = Term;
