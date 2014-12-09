/** @jsx React.DOM */

"use strict";

var React = require('react');
var FeaturedTerms = require('./FeaturedTerms');
var Intro = require('./Intro');
var TED = require('./TED');
var Video = require('./Video');
var View = require('./View');
var Who = require('./Who')

var MainPage = React.createClass({
  render: function() {
    return (
      <main id="main" className="clearfix">
        <Video />
        <TED />
        <Intro />
        <FeaturedTerms />
        <View />
        <Who />
      </main>
    );
  }
});

module.exports = MainPage;
