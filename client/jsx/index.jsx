/**
 * @jsx React.DOM
 */
"use strict";

var React = require('react'),
  App = require('./App');

var Client = React.createClass({
  render: function() {
    return (
      <body>
        <App library={this.props.library} path={this.props.path} />
        <script src='//localhost:3000/browser-sync/browser-sync-client.1.5.8.js'></script>
        <a href="https://github.com/clintandrewhall/metaphorically"><img style={{position: 'absolute', top: 0, left: 0, border: 0}} src="https://camo.githubusercontent.com/567c3a48d796e2fc06ea80409cc9dd82bf714434/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png"/></a>
      </body>
    );
  }
});

module.exports = Client;

if (typeof window !== 'undefined') {
  window.onload = function() {
    React.renderComponent(Client(), document);
  };
}
