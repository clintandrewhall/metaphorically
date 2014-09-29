/**
 * @jsx React.DOM
 */
"use strict";

var Bootstrap = require('react-bootstrap'),
  ReactRouter = require('react-router-component'),
  Link = ReactRouter.Link,
  Locations = ReactRouter.Locations,
  Location = ReactRouter.Location,
  Nav = Bootstrap.Nav,
  NavBar = Bootstrap.NavBar,
  NavItem = Bootstrap.NavItem,
  NotFound = ReactRouter.NotFound,
  React = require('react'),
  ReactAsync = require('react-async'),
  superagent = require('superagent'),
  Topic = require('./../components/Topic.jsx');

var MainPage = React.createClass({
  render: function() {
    return (
      <div className="MainPage">
        <h1>Hello, world!</h1>
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
    var topics = this.props.library.getTopics();
    var active = this.props.path.split('/').pop();
    var links = topics.map(function(topic) {
      var className = '';
      if (topic.id === active) {
        className = 'active';
      }
      return <li className={className} key={topic.id}><Link href={topic.href}>{topic.title}</Link></li>;
    });
    return (
      <html>
        <head>
          <link rel="stylesheet" href="/public/css/style.css" />
          <script src="/public/js/bundle.js" />
        </head>
        <Nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">metaphorical.ly</a>
            </div>
          </div>
        </Nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 col-md-2 sidebar">
              <Nav bsStyle="pills" expanded={true} stacked={true} className="nav nav-sidebar">
                {links}
              </Nav>
            </div>
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              <Locations className="App" path={this.props.path}>
                <Location path="/" handler={MainPage} />
                <Location path="/topic/:topicId" handler={Topic} topicPath={this.props.path} />
                <NotFound handler={NotFoundHandler} />
              </Locations>
            </div>
          </div>
        </div>
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
