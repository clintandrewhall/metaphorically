/** @jsx React.DOM */
"use strict";

var React = require('react'),
  Router = require('react-router'),
  Link = Router.Link,
  RouteHandler = Router.RouteHandler;

var Nav = React.createClass({
  mixins: [ Router.State ],
  render: function() {
    return (
      <nav {...this.props} className="master-nav section group">
        <ul className="master-nav-links">
          <li className="master-nav-link">
            <a className={this.isActive('terms') ? 'selected' : ''} href="/term">Metaphors</a>
          </li>
          <li className="master-nav-link">
            <Link className={this.getPath() == '/' ? 'selected' : ''} href="/" to="about">About</Link>
          </li>
          <li className="master-nav-link"><a href="#">Contact</a></li>
          <li className="master-nav-link">
            <a href="https://github.com/clintandrewhall/metaphorically/" target="_blank">
              Contribute a Metaphor
            </a>
          </li>
        </ul>
      </nav>
    );
  }
});

module.exports = Nav;
