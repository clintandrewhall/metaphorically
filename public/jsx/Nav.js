/** @jsx React.DOM */
"use strict";
require('node-jsx').install({extension: '.jsx'});

var React = require('react');

var MainPage = React.createClass({displayName: 'MainPage',
  render: function() {
    return (
      React.DOM.nav(null, 
        React.DOM.ul(null, 
          React.DOM.li(null, React.DOM.a({href: "/"}, "Home")), 
        
          this.props.library.getTermList().map(function(term) {
            return React.DOM.li({key: term.id}, React.DOM.a({href: term.href}, term.title));
          })
        )
      )
    );
  }
});

module.exports = MainPage;
