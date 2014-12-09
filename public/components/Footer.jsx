/** @jsx React.DOM */
"use strict";

var React = require('react');
var Sponsors = require('./Sponsors');

var Footer = React.createClass({
  render: function() {
    return (
      <div>
        <footer className="section footer">
          <p className="cta">
            Hear a term that you wish had a metaphor? Tweet us, post it to Facebook, or, if you're feeling geeky, open a new task <span style={{whiteSpace:'nowrap'}}>on Github!</span>
          </p>
          <p className="icons">
            <a className="facebook" href="http://www.facebook.com/meta4ically"><img src="/images/social-facebook-lg.png" height="64" /></a>
            <a className="twitter" href="http://www.twitter.com/metaphorical_ly"><img src="/images/social-twitter-lg.png" height="64" /></a>
            <a className="github" href="http://www.github.com/clintandrewhall/metaphorically"><img src="/images/social-github-lg.png" height="64" /></a>
          </p>
        </footer>
        <Sponsors />
      </div>
    );
  }
});

module.exports = Footer;
