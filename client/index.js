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
  Topic = require('./../components/Topic.jsx'),
  App = require('./../components/App.jsx');

var Client = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <link rel="stylesheet" href="/public/css/style.css" />
          <script src="/public/js/bundle.js" />
        </head>
        <body>
          <App library={this.props.library} path={this.props.path} />
        </body>
      </html>
    );
  }
});

module.exports = Client;

if (typeof window !== 'undefined') {
  window.onload = function() {
    React.renderComponent(Client(), document);
  };
}
