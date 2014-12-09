/** @jsx React.DOM */

"use strict";

var React = require('react');

var Sponsors = React.createClass({
  render: function() {
    return (
      <section className="section sponsors">
        <div className="sponsor">
          <p>First proposed and shared at</p>
          <p>
            <a href="http://tedxrenfrewcollingwood.com/speaker-2014/clint-hall" target="_blank">
              <img src="/images/sponsors/tedx.png" height="75" width="250" />
            </a>
          </p>
        </div>
        <div className="sponsor">
          <p>Free hosting through the generosity of</p>
          <p>
            <a href="http://opensource.nodejitsu.com/" target="_blank">
              <img src="/images/sponsors/nodejitsu.png" height="75" width="250" />
            </a>
          </p>
        </div>
        <div className="sponsor">
          <p>Source code managed by</p>
          <p>
            <a href="https://github.com/clintandrewhall/metaphorically" target="_blank">
              <img src="/images/sponsors/github.png" height="75" width="250" />
            </a>
          </p>
        </div>
        <div className="sponsor">
          <p>Site design and graphical assets by</p>
          <p>
            <a href="http://www.hannahmcgean.com/" target="_blank">
              <img src="/images/sponsors/hanah.png" height="75" width="250" />
            </a>
          </p>
        </div>
      </section>
    );
  }
});

module.exports = Sponsors;
