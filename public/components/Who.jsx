/** @jsx React.DOM */

"use strict";

var React = require('react');

var Who = React.createClass({
  render: function() {
    return (
      <article className="section who">
        <header className="who-header">
          <h2 className="who-heading">Who uses metaphorical.ly?</h2>
        </header>
        <section id="everyone" className="who-section everyone">
          <div className="who-section-content">
            <h3 className="who-section-heading">Everyone</h3>
            <p>
              Use the <a href="/term">metaphors</a> on this site to demystify
              the geek-speak you hear every day.  Understanding these concepts
              can save you a lot of time and frustration... and phone calls to <span style={{whiteSpace:'nowrap'}}>"your" geek!</span>
            </p>
          </div>
        </section>
        <section id="geeks" className="who-section geeks">
          <div className="who-section-content">
            <h3 className="who-section-heading">Geeks</h3>
            <p>
              Ever have difficulty finding the best way to explain something to
              a friend or family member? You can probably find a great metaphor <a href="/term">here</a> that <span style={{whiteSpace:'nowrap'}}>can help.</span>
            </p>
          </div>
        </section>
        <section id="super" className="who-section super-geeks">
          <div className="who-section-content">
            <h3 className="who-section-heading">Super Geeks</h3>
            <p>
              Think this site is awesome? Do you have what it takes to come
              up with an equally awesome metaphor? Open a pull request on our <a href="http://www.github.com/clintandrewhall/metaphorically" target="_blank">Github</a> repo... we'll merge it in and create a summary image <span style={{whiteSpace:'nowrap'}}>for you.</span>
            </p>
          </div>
        </section>
      </article>
    );
  }
});

module.exports = Who;
