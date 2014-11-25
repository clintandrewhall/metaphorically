/** @jsx React.DOM */
"use strict";

var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <footer className="footer">
        <div className="sponsors section group">
          <div className="col span_3_of_12">
            <p>First proposed and shared at</p>
            <p>
              <a href="http://tedxrenfrewcollingwood.com/speaker-2014/clint-hall" target="_blank">
                <img src="/images/sponsors/tedx.png" height="75" width="250" />
              </a>
            </p>
          </div>
          <div className="col span_3_of_12">
            <p>Free hosting through the generosity of</p>
            <p>
              <a href="http://opensource.nodejitsu.com/" target="_blank">
                <img src="/images/sponsors/nodejitsu.png" height="75" width="250" />
              </a>
            </p>
          </div>
          <div className="col span_3_of_12">
            <p>Source code managed by</p>
            <p>
              <a href="https://github.com/clintandrewhall/metaphorically" target="_blank">
                <img src="/images/sponsors/github.png" height="75" width="250" />
              </a>
            </p>
          </div>
          <div className="col span_3_of_12">
            <p>Site design and graphical assets by</p>
            <p>
              <a href="http://www.hannahmcgean.com/" target="_blank">
                <img src="/images/sponsors/hanah.png" height="75" width="250" />
              </a>
            </p>
          </div>
        </div>
        <div className="license">Created by <a href="http://clintandrewhall.com" property="cc:attributionName" rel="cc:attributionURL">Clint Andrew Hall</a>, licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.</div>
      </footer>
    );
  }
});

module.exports = Footer;
