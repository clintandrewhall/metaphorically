/**
* @jsx React.DOM
*/
"use strict";

var React = require('react'),
  Router = require('react-router'),
  Route = Router.Route,
  DefaultRoute = Router.DefaultRoute,
  RouteHandler = Router.RouteHandler,
  Root = require('./Root'),
  Term = require('./Term'),
  MainPage = require('./MainPage');

module.exports = (
  <Route handler={Root} path="/">
    <DefaultRoute handler={MainPage} />
    <Route name="term" path="/term/:termId" handler={Term} />
  </Route>
);
