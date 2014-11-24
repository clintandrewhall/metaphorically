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
  Terms = require('./Terms'),
  Term = require('./Term'),
  MainPage = require('./MainPage');

module.exports = (
  <Route handler={Root} name="about" path="/">
    <DefaultRoute handler={MainPage} />
    <Route name="terms" path="term" handler={Terms}>
      <Route name="term" path=":termId" handler={Term} />
    </Route>
  </Route>
);
