/** @jsx React.DOM */
"use strict";

var React = require('react'),
  Router = require('react-router'),
  RouteHandler = Router.RouteHandler,
  manifest = require('../../terms/js/manifest.json');

var TermNav = React.createClass({
  mixins: [ Router.State ],
  render: function() {
    var termIdParam = this.getParams().termId;
    return (
      <ol className="term-nav">
      {
        Object.keys(manifest).map(function(termId) {
          var term = manifest[termId];
          var className = termId === termIdParam ? 'selected' : '';
          return (
            <li key={term.id} className="term-nav-item">
              <a className={className} href={term.href}>{term.title}</a>
            </li>
          );
        })
      }
      </ol>
    );
  }
});

module.exports = TermNav;
