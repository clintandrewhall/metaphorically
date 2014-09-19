/**
 * @jsx React.DOM
 */
"use strict";

var React = require('react'),
  ReactAsync = require('react-async'),
  ReactRouter = require('react-router-component'),
  superagent = require('superagent'),
  Pages = ReactRouter.Pages,
  Page = ReactRouter.Page,
  NotFound = ReactRouter.NotFound,
  Link = ReactRouter.Link;

var MainPage = React.createClass({
  render: function() {
    return (
      <div className="MainPage">
        <h1>Hello, world!</h1>
      </div>
    );
  }
});

var TopicPage = React.createClass({
  mixins: [ReactAsync.Mixin],

  getInitialStateAsync: function(cb) {
    cb(null, null);
  },

  render: function() {
    return (
      <div className="TopicPage">
        Hello there {this.props}.
      </div>
    );
  }
});

var NotFoundHandler = React.createClass({
  render: function() {
    return (
      <p>Page not found</p>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <link rel="stylesheet" href="/assets/style.css" />
          <script src="/assets/bundle.js" />
        </head>
        <Pages className="App" path={this.props.path}>
          <Page path="/" handler={MainPage} />
          <Page path="/topic/*" handler={TopicPage} />
          <NotFound handler={NotFoundHandler} />
        </Pages>
      </html>
    );
  }
});

module.exports = App;

if (typeof window !== 'undefined') {
  window.onload = function() {
    React.renderComponent(App(), document);
  };
}
