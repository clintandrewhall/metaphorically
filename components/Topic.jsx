/** @jsx React.DOM */

var React = require('react'),
  ReactAsync = require('react-async'),
  marked = require('marked'),
  superagent = require('superagent');

var Topic = React.createClass({
  mixins: [ReactAsync.Mixin],
  statics: {
    getTopic: function(id, cb) {
      superagent.get(
        'http://localhost:3000/async/' + id,
        function(err, res) {
          cb(err, res ? {topic: res.body} : null);
        });
    }
  },

  getInitialStateAsync: function(cb) {
    this.type.getTopic(this.props.topicId, cb);
  },

  componentWillReceiveProps: function(nextProps) {
    if (this.props.topicId !== nextProps.topicId) {
      this.type.getTopic(nextProps.topicId, function(err, topic) {
        if (err) {
          throw err;
        }
        this.setState({topic: topic});
      }.bind(this));
    }
  },

  render: function() {
    if (this.state.topic.md) {
      var markup = marked(this.state.topic.md);
      return (
        <div className="TopicPage" dangerouslySetInnerHTML={{__html:markup}} />
      );
    }
    return (
      <div className="NotFound" />
    );
  }
});

module.exports = Topic;
