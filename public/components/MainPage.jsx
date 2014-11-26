/** @jsx React.DOM */

"use strict";

var React = require('react');

var github = "http://ghbtns.com/github-btn.html?user=clintandrewhall&repo=metaphorically&type=fork&size=large";
var twitter = "https://twitter.com/intent/tweet?screen_name=metaphorical_ly&text=%23givemeametaphor%20for";
var twitterCode = "\n\n//<![CDATA[\nvar _t = function(d,s,id){\nvar js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}; _t(document, 'script', 'twitter-wjs');\n\n//]]>";

var MainPage = React.createClass({
  render: function() {
    return (
      <main id="main" className="clearfix">
        <article className="welcome">
          <h2 className="welcome-hero">What is <span className="domain">metaphorical</span><span className="suffix">.ly   </span>?</h2>
          <div class="section group">
            <span className="col span_2_of_12"/>
            <section id="everyone" className="welcome-col col span_2_of_12">
              <div className="welcome-col-content">
                <h3 className="welcome-header">For Everyone</h3>
                <p className="intro">
                  Use the <a href="/terms">metaphors</a> on this site to demystify
                  the geek-speak you hear everyday.  Understanding these concepts
                  can save you a lot of time and frustration... and phone calls to
                  "your" geek!
                </p>
                <p className="action"><a href="/terms">Find a Metaphor</a></p>
                <p className="cta">
                  Hear a term that you wish had a metaphor?  Tweet us, post it to
                  Facebook, or, if you're feeling geeky, open a new task on Github!
                </p>
              </div>
            </section>
            <span className="col span_1_of_12" />
            <section id="geeks" className="welcome-col col span_2_of_12">
              <div className="welcome-col-content">
                <h3 className="welcome-header">For Geeks</h3>
                <p className="intro">
                  Ever have difficulty finding the best way to explain something to
                  a friend or family member? You can probably find a great
                  metaphor here that can help.
                </p>
                <p className="action"><a href="/terms">Find a Metaphor</a></p>
                <p className="cta">
                  Need a metaphor?  Tweet us, post it to Facebook, or open a new
                  task on Github!
                </p>
              </div>
            </section>
            <span className="col span_1_of_12" />
            <section id="super" className="welcome-col col span_2_of_12">
              <div className="welcome-col-content">
                <h3 className="welcome-header">For super Geeks</h3>
                <p className="intro">
                  Think this site is awesome and think you have what it takes to come
                  up with an equally awesome metaphor? Open a pull request on our
                  Github repo... we'll merge it in and create a summary image for you.
                </p>
                <p className="action"><a href="http://www.github.com/clintandrewhall/metaphorically">Submit a Metaphor</a></p>
                <p className="cta">
                  Care to share the love?  Post this to Facebook and Twitter!
                </p>
              </div>
            </section>
          </div>
        </article>
      </main>
    );
  }
});

module.exports = MainPage;
