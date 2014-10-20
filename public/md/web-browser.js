/** @jsx React.DOM */
var React      = require("react");

var _runtime   = require("/Users/clint/Personal/Projects/metaphorically/node_modules/reactdown/lib/runtime.js");
var _Wrapper   = _runtime.Wrapper;
var _Component = _runtime.Reactdown;

module.exports = function create(props) {
  var _markup    = _Wrapper(null, Definition( {source:"Wikipedia", href:"http://en.wikipedia.org/wiki/Web_browser"}, 
  "A web browser (commonly referred to as a browser) is a software application"+' '+
  "for retrieving, presenting and traversing information resources on the World"+' '+
  "Wide Web."
),

React.DOM.h2( {id:"a-web-browser-is-a-tour-guide"}, "A Web Browser is a Tour Guide"),
React.DOM.p(null, "If you wanted to visit a specific building in a new city, and were taking a"+' '+
"tour, you could ask a tour guide to take you there.  If the address is valid,"+' '+
"he or she can point to the building on a map and look there for what you want."),
React.DOM.p(null, "Everything on the web lives in a specific building: a web server identified by"+' '+
"an ", React.DOM.a( {href:"/term/ip-address"}, "IP Address"), " and DNS entry. When you ask to see a web page, the browser looks"+' '+
"at the URL you are requesting and finds the web server corresponding to that"+' '+
"request.  It then asks for the specific web page in that building."),
React.DOM.p(null, "— ", React.DOM.a( {href:"http://www.github.com/clintandrewhall"}, "@clintandrewhall"))
);
  props = _runtime.merge(module.exports.meta, props);
  return _Component.apply(_Component, [props].concat(_markup));
};
module.exports.meta   = {"title":"Web Browser"};
var App = require("./../jsx/App");
var Definition = require("./../jsx/Definition");
var MainPage = require("./../jsx/MainPage");
var Nav = require("./../jsx/Nav");
var Term = require("./../jsx/Term");
var Titlebar = require("./../jsx/Titlebar");