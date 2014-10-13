/** @jsx React.DOM */

var React = require('react'),
  ReactAsync = require('react-async'),
  marked = require('marked'),
  superagent = require('superagent');
  var Link = require('react-router-component').Link;

var Term = React.createClass({
  mixins: [ReactAsync.Mixin],
  statics: {
    getTerm: function(id, cb) {
      superagent.get(
        'http://localhost:3000/async/' + id,
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
    if (this.state.term.md) {
      var markup = marked(this.state.term.md);
      return (
        <div>
          <Link href='/term/ip-address'>Test</Link>
          <div className="TermPage" dangerouslySetInnerHTML={{__html:markup}} />
        </div>
      );
    }
    return (
      <div className="NotFound" />
    );
  }
});

module.exports = Term;
