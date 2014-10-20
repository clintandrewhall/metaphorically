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

var NotFoundHandler = React.createClass({displayName: 'NotFoundHandler',
  render: function() {
    return (
      React.DOM.p(null, "Page not found")
    );
  }
});

var App = React.createClass({displayName: 'App',
  render: function() {
    var terms = this.props.library.getTermList(),
      active = this.props.path.split('/').pop(),
      links = terms.map(function(term) {
        var className = '';
        if (term.id === active) {
          className = 'active';
        }
        return React.DOM.li({className: className, key: term.id}, 
          Link({href: term.href}, term.title)
        );
      });

    return (
      React.DOM.div(null, 
        Titlebar(null), 
        React.DOM.div({className: "main"}, 
          Locations({className: "App", path: this.props.path}, 
            Location({path: "/", handler: MainPage, library: this.props.library}), 
            Location({path: "/term/:termId", handler: Term, library: this.props.library, termPath: this.props.path}), 
            NotFound({handler: NotFoundHandler})
          )
        )
      )
    );
  }
});

module.exports = App;
