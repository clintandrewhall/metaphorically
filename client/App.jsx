/**
 * @jsx React.DOM
 */
"use strict";

var ReactRouter = require('react-router-component'),
  Bootstrap = require('react-bootstrap'),
  Link = ReactRouter.Link,
  Locations = ReactRouter.Locations,
  Location = ReactRouter.Location,
  Nav = Bootstrap.Nav,
  MainPage = require('./MainPage.jsx'),
  Term = require('./Term.jsx'),
  Titlebar = require('./Titlebar.jsx'),
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
    var terms = this.props.library.getTerms(),
      active = this.props.path.split('/').pop(),
      links = terms.map(function(term) {
        var className = '';
        if (term.id === active) {
          className = 'active';
        }
        return <li className={className} key={term.id}>
          <Link href={term.href}>{term.title}</Link>
        </li>;
      });

    return (
      <div>
        <Titlebar />
        <div className="main">
          <Locations className="App" path={this.props.path}>
            <Location path="/" handler={MainPage} />
            <Location path="/term/:termId" handler={Term} termPath={this.props.path} />
            <NotFound handler={NotFoundHandler} />
          </Locations>
        </div>
      </div>
    );
  }
});

module.exports = App;
