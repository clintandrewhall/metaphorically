/** @jsx React.DOM */
var React      = require("react");

var _runtime   = require("/Users/clint/Personal/Projects/metaphorically/node_modules/reactdown/lib/runtime.js");
var _Wrapper   = _runtime.Wrapper;
var _Component = _runtime.Reactdown;

module.exports = function create(props) {
  var _markup    = _Wrapper(null, Definition( {source:"Wikipedia", href:"http://en.wikipedia.org/wiki/IP_address"}, 
  "An Internet Protocol address (IP address) is a numerical label assigned to"+' '+
  "each device (e.g., computer, printer) participating in a computer network"+' '+
  "that uses the Internet Protocol for communication."
),

React.DOM.h2( {id:"an-ip-address-is-a-mailing-address-"}, "An IP Address is a mailing address."),
React.DOM.p(null, "Like a mailman delivering mail, an IP Address is how the Internet network knows"+' '+
"how to deliver responses from web servers and other devices directly to you."),
React.DOM.p(null, "— ", React.DOM.a( {href:"http://www.github.com/clintandrewhall"}, "@clintandrewhall")),
React.DOM.h2( {id:"an-ip-address-is-a-telephone-number-"}, "An IP Address is a telephone number."),
React.DOM.p(null, "While it looks complicated, an IP Address is nothing more than a unique number"+' '+
"to identify you on the Internet.  These numbers are assigned by your ISP, or,"+' '+
"if you have one, your ", React.DOM.a( {href:"/term/router"}, "router"),"."),
React.DOM.p(null, "When you request a page from a web server, your request is marked as coming"+' '+
"from a specific address. When the response is ready, the web server sends it to"+' '+
"your specific number, much like you talking to someone over the phone."),
React.DOM.p(null, "— ", React.DOM.a( {href:"http://www.github.com/clintandrewhall"}, "@clintandrewhall"))
);
  props = _runtime.merge(module.exports.meta, props);
  return _Component.apply(_Component, [props].concat(_markup));
};
module.exports.meta   = {"title":"IP Address"};
var App = require("./../jsx/App");
var Definition = require("./../jsx/Definition");
var MainPage = require("./../jsx/MainPage");
var Nav = require("./../jsx/Nav");
var Term = require("./../jsx/Term");
var Titlebar = require("./../jsx/Titlebar");