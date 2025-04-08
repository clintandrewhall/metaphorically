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
      if (term) {
        url += term.href;
        title = '\'' + term.title + '\' on metaphorical.ly';
        type = 'metaphorically:metaphor';
      }
    }

    return (
      <html>
        <head>
          <title>Metaphorical.ly</title>
          <meta property="og:title" content={title} />
          <meta property="og:site_name" content="metaphorical.ly" />
          <meta property="og:url" content={url} />
          <meta property="og:description" content="An open-source effort to demystify
          common and popular technologies in an easily understood way.
          Suggest or contribute today!"
          />
          <meta property="og:image" content={image} />
          <meta property="fb:app_id" content="667375806717283" />
          <meta property="og:type" content={type} />
          <meta name="google-site-verification" content="C0eW0qE3gb62wnUvaKhVJVeMlxboTgFbQa5Dc6DY4bY" />
          <link href='https://fonts.googleapis.com/css?family=Oswald:400,300' rel='stylesheet' type='text/css' />
          <link href='https://fonts.googleapis.com/css?family=Patua+One' rel='stylesheet' type='text/css' />
          <link href='https://fonts.googleapis.com/css?family=Lato:300&subset=latin' rel='stylesheet' type='text/css' />
          <link rel="stylesheet" href="/css/grid/html5reset.css" />
          <link rel="stylesheet" href="/css/style.css" />
          <link rel="stylesheet" href="/css/desktop.css" />
          <link rel="stylesheet" href="/css/gallery.min.css" />
        </head>
        <body>
          <div id="content">
            <Titlebar />
            <RouteHandler />
            <Footer />
            <div className="license">Created by <a href="http://clintandrewhall.com" property="cc:attributionName" rel="cc:attributionURL">Clint Andrew Hall</a>, licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.</div>
          </div>
          <script type="text/javascript" src="/scripts/google.js"></script>
          {/*}<script type="text/javascript" src="/bundle/bundle.js"></script>*/}
        </body>
      </html>
    );
  }
});

/*if (typeof window !== 'undefined') {
  console.log('applying');
  window.onload = function() {
    console.log('loading');
    Router.run(
      require('./routes'),
      document.location.pathName,
      function (Handler, state) {
        console.log('rendering');
        React.render(Handler(), document);
      }
    );
  }
}*/

module.exports = Root;
