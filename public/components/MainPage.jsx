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
        <aside className="video">
          <section id="tedx">
            <iframe width="560" height="315" src="//www.youtube.com/embed/IwjLylj6GpI" frameBorder="0" allowFullScreen></iframe>
          </section>
          <section id="peopleTech">
            <h2 className="ptLineOne"><em>Technology</em><span> understanding </span><em>People</em></h2>
            <p className="ptLineTwo"><span>has trumped</span></p>
            <h2 className="ptLineThree"><em>People</em><span> understanding </span><em>Technology</em></h2>
          </section>
          <section id="artScience">
          <h2 className="ptLineOne"><em>Art</em><span> and </span><em>Science</em></h2>
          <p className="ptLineTwo"><span>has become</span></p>
          <h2 className="ptLineThree"><em>Sorcery</em><span> and </span><em>Alchemy</em></h2>
          </section>
        </aside>
        <article className="welcome">
          <h2 className="welcome-hero">So what is <span className="domain">metaphorical</span><span className="suffix">.ly </span>?</h2>
          <div className="section group">
            <p className="col welcome-hero-text span_6_of_12"><span className="domain">metaphorical</span><span className="suffix">.ly</span> encourages everyone to begin to demystify technology by breaking it down into simple metaphors. By doing so, we'll begin to see technology not as sorcery or alchemy, but as simple interactions with things designed by people.</p>
          </div>
          <div className="section group">
            <section id="everyone" className="welcome-col col span_2_of_12">
              <div className="welcome-col-content">
                <h3 className="welcome-header">Everyone</h3>
                <p className="intro">
                  Use the <a href="/term">metaphors</a> on this site to demystify
                  the geek-speak you hear every day.  Understanding these concepts
                  can save you a lot of time and frustration... and phone calls to <span style={{whiteSpace:'nowrap'}}>"your" geek!</span>
                </p>
              </div>
            </section>
            <section id="geeks" className="welcome-col col span_2_of_12">
              <div className="welcome-col-content">
                <h3 className="welcome-header">Geeks</h3>
                <p className="intro">
                  Ever have difficulty finding the best way to explain something to
                  a friend or family member? You can probably find a great metaphor <a href="/term">here</a> that <span style={{whiteSpace:'nowrap'}}>can help.</span>
                </p>
              </div>
            </section>
            <section id="super" className="welcome-col col span_2_of_12">
              <div className="welcome-col-content">
                <h3 className="welcome-header">Super Geeks</h3>
                <p className="intro">
                  Think this site is awesome? Do you have what it takes to come
                  up with an equally awesome metaphor? Open a pull request on our <a href="http://www.github.com/clintandrewhall/metaphorically" target="_blank">Github</a> repo... we'll merge it in and create a summary image <span style={{whiteSpace:'nowrap'}}>for you.</span>
                </p>
              </div>
            </section>
            <p className="group section cta"><a href="/term">View the Metaphors</a></p>
            <p className="group section contact">
            Hear a term that you wish had a metaphor?<br/><a href="http://www.twitter.com/metaphorical_ly" target="_blank">Tweet</a> us, post it to <a href="https://www.facebook.com/meta4ically" target="_blank">Facebook</a>, or, if you're feeling geeky, open a new task <span style={{whiteSpace:'nowrap'}}>on <a href="http://www.github.com/clintandrewhall/metaphorically" target="_blank">Github</a>!</span>
            </p>
          </div>
        </article>
      </main>
    );
  }
});

module.exports = MainPage;
