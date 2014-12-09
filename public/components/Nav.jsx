/** @jsx React.DOM */
"use strict";

var React = require('react/addons');
var cx = React.addons.classSet;
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var Nav = React.createClass({
  mixins: [ Router.State ],
  render: function() {
    var {className, ...otherProps} = this.props;
    var classes = { 'nav' : true };

    classes[className] = true;

    return (
      <nav {...otherProps} className={cx(classes)} id="navigation">
        <ul className="nav-links">
          <li className="nav-link">
            <a className={this.isActive('about') && !this.isActive('terms') ? 'selected' : ''} href="/">About</a>
          </li>
          <li className="nav-link">
            <a className={this.isActive('terms') ? 'selected' : ''} href="/term">Metaphors</a>
          </li>
          <li className="nav-link">
            <a href="https://facebook.com/meta4ically/" target="_blank">Contact</a>
          </li>
          <li className="nav-link">
            <a href="https://twitter.com/metaphorical_ly/" target="_blank">Suggest</a>
          </li>
          <li className="nav-link">
            <a href="https://github.com/clintandrewhall/metaphorically/" target="_blank">Contribute</a>
          </li>
        </ul>
      </nav>
    );
  }
});

module.exports = Nav;
