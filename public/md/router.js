/** @jsx React.DOM */
var React      = require("react");

var _runtime   = require("/Users/clint/Personal/Projects/metaphorically/node_modules/reactdown/lib/runtime.js");
var _Wrapper   = _runtime.Wrapper;
var _Component = _runtime.Reactdown;

module.exports = function create(props) {
  var _markup    = _Wrapper(null, Definition(
  {source:"Wikipedia",
  href:"http://en.wikipedia.org/wiki/Router_(computing)"}, 
  "A router is a networking device, commonly specialized hardware, that forwards"+' '+
  "data packets between computer networks."
),

React.DOM.h2( {id:"a-router-is-a-telephone-operator"}, "A router is a telephone operator"),
React.DOM.p(null, "In the \"old days\", you didn't dial someone directly, you lifted the handset and"+' '+
"asked the operator to connect you somewhere.  Telephone operators sat at large"+' '+
"switchboards and would quite literally connect you to someone else by plugging"+' '+
"your cord into the correct outlet."),
React.DOM.figure(null, 
  React.DOM.a( {href:"https://www.flickr.com/photos/70251312@N00/9374897674",
    title:"Telephone operator and switchboard, Kalamazoo, Michigan. RPPC,"+' '+
      "Postmarked 1908. by Wystan, on Flickr"}, 
    React.DOM.img( {src:"https://farm4.staticflickr.com/3779/9374897674_d108d1a193.jpg",
      alt:"Telephone operator and switchboard, Kalamazoo, Michigan. RPPC,"+' '+
        "Postmarked 1908.",
      width:"500",
      height:"316"})
  ),
  React.DOM.figcaption(null, 
    "Telephone operator and switchboard, Kalamazoo, Michigan. RPPC,"+' '+
    "Postmarked 1908."
  )
),

React.DOM.p(null, "A router does the same thing.  When websites want to be able to send a webpage"+' '+
"to your computer, the router connects the web server's message to your device,"+' '+
"(rather than someone else in your house)."),
React.DOM.p(null, "— ", React.DOM.a( {href:"http://www.github.com/clintandrewhall"}, "@clintandrewhall")),
React.DOM.h2( {id:"a-router-is-a-receptionist"}, "A router is a receptionist"),
React.DOM.p(null, "When you connect a router to your modem, it takes the ", React.DOM.a( {href:"/term/ip-address"}, "IP address"), " of your modem"+' '+
"and gives everyone connected to it a private ", React.DOM.a( {href:"/term/ip-address"}, "IP address"), " that only it knows."+' '+
"When you ask a web server for a web page, the router connects you, but the web"+' '+
"server only knows the \"public\" ", React.DOM.a( {href:"/term/ip-address"}, "ip address"),".  When the web server responds with"+' '+
"your web page, only the router knows where to send that information."),
React.DOM.p(null, "If you were having a meeting with someone at an office, only the receptionist"+' '+
"knows where everyone sits and their phone numbers.  He or she would then send"+' '+
"your message to the person, rather than connect you directly."),
React.DOM.p(null, "— ", React.DOM.a( {href:"http://www.github.com/clintandrewhall"}, "@clintandrewhall"))
);
  props = _runtime.merge(module.exports.meta, props);
  return _Component.apply(_Component, [props].concat(_markup));
};
module.exports.meta   = {"title":"Router"};
var App = require("./../jsx/App");
var Definition = require("./../jsx/Definition");
var MainPage = require("./../jsx/MainPage");
var Nav = require("./../jsx/Nav");
var Term = require("./../jsx/Term");
var Titlebar = require("./../jsx/Titlebar");