/**
* @jsx React.DOM
*/
"use strict";

var React = require('react'),
Router = require('react-router'),
Route = Router.Route,
RouteHandler = Router.RouteHandler,
Term = require('./Term'),
MainPage = require('./MainPage');

module.exports = (
  <Route name="main" path="/" handler={MainPage}>
    <Route name="term" path=":termId" handler={Term}/>
  </Route>
);
