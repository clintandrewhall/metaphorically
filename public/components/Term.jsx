/** @jsx React.DOM */
"use strict";

var React = require('react'),
  manifest = require('./../../terms/js/manifest.json'),
  Router = require('react-router'),
  RouteHandler = Router.RouteHandler,
  Titlebar = require('./Titlebar'),
  TermNav = require('./TermNav'),
  Nav = require('./Nav');

function getTerm(id, cb) {
  require.ensure([], function() {
    var term = require('./../../terms/js/' + id);
    return cb(null, term);
  })
}

var Term = React.createClass({
  mixins: [ Router.State ],
  componentWillMount: function() {
    var params = this.getParams();
    getTerm(params.termId, function(err, term) {
      if (err) {
        throw err;
      }
      this.setState({term: term});
    }.bind(this));
  },

  render: function() {
    var params = this.getParams();
    if (this.state && this.state.term) {
      var Term = React.createFactory(this.state.term);
      var term = manifest[params.termId];
      return (
        <article className="col span_8_of_12">
          <h2 className="term-title span_3_of_12">
            <span className="term-title-caption">{term.title}</span>
          </h2>
          <Term term={manifest[this.props.termId]} />
        </article>
      );
    }
    return (
      <div className="NotFound" />
    );
  }
});

module.exports = Term;
