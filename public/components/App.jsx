/**
 * @jsx React.DOM
 */
"use strict";

var React = require('react'),
  Router = require('react-router-component'),
  Locations = Router.Locations,
  Location = Router.Location,
  Term = require('./Term'),
  MainPage = require('./MainPage');

var App = React.createClass({
  render: function() {
    return (
      <Locations path={this.props.path}>
        <Location path="/" handler={MainPage} />
        <Location path="/term/:termId" handler={Term} />
      </Locations>
    );
  }
});

module.exports = App;

if (typeof window !== 'undefined') {
  window.onload = function() {
    React.renderComponent(App({path: window.location.pathname}), document.getElementById('content'));
  }
}
