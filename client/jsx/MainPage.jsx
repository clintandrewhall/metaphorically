/** @jsx React.DOM */

"use strict";

var React = require('react'),
  Nav = require('./Nav');

var github = "http://ghbtns.com/github-btn.html?user=clintandrewhall&repo=metaphorically&type=fork&size=large";
var twitter = "https://twitter.com/intent/tweet?screen_name=metaphorical_ly&text=%23givemeametaphor%20for";
var twitterCode = "\n\n//<![CDATA[\nvar _t = function(d,s,id){\nvar js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}; _t(document, 'script', 'twitter-wjs');\n\n//]]>";

var MainPage = React.createClass({
  render: function() {
    return (
      <div className="MainPage">
        <Nav library={this.props.library} />
        <section className="eleven columns offset-by-two content">
          <h2>Welcome!</h2>
          <p>
            I'm building metaphorical.ly as a companion
            to <a href="http://tedxrenfrewcollingwood.com/speaker-2014/clint-hall">my TEDx talk</a>.
          </p>
          <p><a href="http://tedxrenfrewcollingwood.com/">
            <img src="/public/images/tedx.png" width="400" />
          </a></p>
          <p>
            This is just a placeholder as I flesh out the site. In the meantime,
            if you'd like to submit a term and metaphor, you can open
            a <a href="https://github.com/clintandrewhall/metaphorically/pulls">pull request</a> on
            GitHub.
          </p>
          <p>
          <iframe src={github} allowTransparency="true" frameBorder="0" scrolling="0" width="170" height="30"></iframe>
          </p>
          <p>
            If there's a term you'd like defined by metaphor, you can
            either <a href="https://github.com/clintandrewhall/metaphorically/issues">open a task</a> on
            GitHub for me or someone else to tackle, or you can tweet me
            at <a href="http://www.twitter.com/metaphorical_ly">@metaphorical_ly</a> and
            I'll open one for you, (include the hashtag '#givethemetaphor').
          </p>
          <p>
            <a href="https://twitter.com/intent/tweet?screen_name=metaphorical_ly&text=%23givemeametaphor%20for" className="twitter-mention-button" data-size="large" data-related="metaphorical_ly">Tweet to @metaphorical_ly</a>
            <script type="text/javascript" dangerouslySetInnerHTML={{__html: twitterCode}}></script>
          </p>
          <p>
            Cheers, and thanks for your support!  See you on the 25th!
          </p>
          <p>
            - Clint
          </p>
        </section>
      </div>
    );
  }
});

module.exports = MainPage;
