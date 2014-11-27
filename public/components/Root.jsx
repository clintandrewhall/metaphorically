/**
* @jsx React.DOM
*/
"use strict";

var React = require('react'),
  Router = require('react-router'),
  RouteHandler = Router.RouteHandler,
  manifest = require('./../../terms/js/manifest.json'),
  Titlebar = require('./Titlebar'),
  Footer = require('./Footer'),
  Nav = require('./Nav');

var Root = React.createClass({
  mixins: [ Router.State ],
  render: function() {
    var termIdParam = this.getParams().termId;
    var url = 'http://metaphorical.ly';
    var title = 'metaphorical.ly: Demystifying Technology Without Jargon';
    var image = 'http://metaphorical.ly/images/og.png';
    var type = 'website';

    if (termIdParam) {
      var term = manifest[termIdParam];
      url += term.href;
      title = '\'' + term.title + '\' on metaphorical.ly';
      type = 'metaphorically:metaphor';
    }

    return (
      <html>
        <head>
          <title>Metaphorical.ly</title>
          <meta property="og:title" value={title} />
          <meta property="og:site_name" value="metaphorical.ly" />
          <meta property="og:url" value={url} />
          <meta property="og:description" value="An open-source effort to demystify
          common and popular technologies in an easily understood way.
          Contribute today!"
          />
          <meta property="og:image" value={image} />
          <meta property="fb:app_id" value="667375806717283" />
          <meta property="og:type" value={type} />
          {/*<meta property="article:author" value="" />*/}
          <meta property="article:publisher" value="https://www.facebook.com/meta4ically" />
          <meta name="google-site-verification" content="C0eW0qE3gb62wnUvaKhVJVeMlxboTgFbQa5Dc6DY4bY" />
          <link href='http://fonts.googleapis.com/css?family=Oswald:400,300,700' rel='stylesheet' type='text/css' />
          <link href='http://fonts.googleapis.com/css?family=Patua+One' rel='stylesheet' type='text/css' />
          <link href='http://fonts.googleapis.com/css?family=Lato:300&subset=latin' rel='stylesheet' type='text/css' />
          <link rel="stylesheet" href="/css/grid/html5reset.css" />
          <link rel="stylesheet" href="/css/grid/col.css" />
          <link rel="stylesheet" href="/css/grid/12cols.css" />
          <link rel="stylesheet" href="/css/style.css" />
        </head>
        <body>
          <script type="text/javascript" src="/scripts/fbjs.js"></script>
          <div id="content">
            <Titlebar />
            <Nav />
            <RouteHandler />
            {/*<div class="fb-like" data-share="true" data-width="450" data-show-faces="true"></div>
          <div class="fb-share-button" data-href="http://metaphorical.ly" data-layout="button_count"></div>*/}
            <Footer />
          </div>
          <script type="text/javascript" src="/scripts/google.js"></script>
        </body>
      </html>
    );
  }
});

/*if (typeof window !== 'undefined') {
  window.onload = function() {
    Router.run(
      require('./routes'),
      document.location.pathName,
      function (Handler, state) {
        React.render(Root(null, Handler()), document.getElementById('content'));
      }
    );

  }
}*/

module.exports = Root;
