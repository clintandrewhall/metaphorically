/**
 * @jsx React.DOM
 */
"use strict";
require('node-jsx').install({extension: '.jsx'});

var ReactRouter = require('react-router-component'),
  Locations = ReactRouter.Locations,
  Location = ReactRouter.Location,
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
    /*var terms = this.props.library.getTerms(),
      active = this.props.path.split('/').pop(),
      links = terms.map(function(term) {
        var className = '';
        if (term.id === active) {
          className = 'active';
        }
        return <li className={className} key={term.id}>
          <Link href={term.href}>{term.title}</Link>
        </li>;
      });*/

    return (
      <div>
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
