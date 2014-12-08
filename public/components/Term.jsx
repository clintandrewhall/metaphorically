/** @jsx React.DOM */
"use strict";

var React = require('react'),
  manifest = require('./../../terms/js/manifest.json'),
  Router = require('react-router'),
  RouteHandler = Router.RouteHandler,
  Titlebar = require('./Titlebar'),
  TermNav = require('./TermNav'),
  Nav = require('./Nav');

function getTag(id, cb) {
  require.ensure([], function() {
    var term = require('./../../terms/js/' + id);
    return cb(null, term);
  })
}

var Term = React.createClass({
  mixins: [ Router.State ],
  propTypes: {
    summary: React.PropTypes.bool,
    termId: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      summary: false
    };
  },
  getInitialState: function() {
    var termId = this.props.termId;
    if (!termId) {
      termId = this.getParams().termId;
    }
    return {
      termId: termId,
      summary: this.props.summary
    }
  },

  componentWillMount: function() {
    getTag(this.state.termId, function(err, tag) {
      if (err) {
        throw err;
      }
      this.setState({
        tag: tag,
        manifest: manifest[this.state.termId]
      });
    }.bind(this));
  },

  render: function() {
    if (!this.state.tag) {
      return null;
    }

    var Tag = React.createFactory(this.state.tag);

    return (
      <article className={'term-container ' + (this.props.summary ? 'summary' : 'col span_9_of_12 full')}>
        <h2 className={'term-title' + (this.props.summary ? '' : ' span_3_of_12')}>
          <a href={this.state.manifest.href} className="term-title-caption">
            {this.state.manifest.title}
          </a>
        </h2>
        <Tag term={manifest} summary={this.props.summary} />
      </article>
    );
  }
});

module.exports = Term;
