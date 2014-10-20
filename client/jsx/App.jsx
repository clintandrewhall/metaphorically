/**
 * @jsx React.DOM
 */
"use strict";

var ReactRouter = require('react-router-component'),
  Locations = ReactRouter.Locations,
  Location = ReactRouter.Location,
  Link = ReactRouter.Link,
  MainPage = require('./MainPage'),
  Term = require('./Term'),
  Titlebar = require('./Titlebar'),
  NotFound = ReactRouter.NotFound,
  React = require('react');

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
      <div className="container">
        <Titlebar />
        <div className="main">
          <Locations className="App" path={this.props.path}>
            <Location path="/" handler={MainPage} library={this.props.library}/>
            <Location path="/term/:termId" handler={Term} library={this.props.library} termPath={this.props.path} />
            <NotFound handler={NotFoundHandler} />
          </Locations>
        </div>
      </div>
    );
  }
});

module.exports = App;
