/** @jsx React.DOM */
var React      = require("react");

var _runtime   = require("/Users/clint/Personal/Projects/metaphorically/node_modules/reactdown/lib/runtime.js");
var _Wrapper   = _runtime.Wrapper;
var _Component = _runtime.Reactdown;

module.exports = function create(props) {
  var _markup    = _Wrapper(null, Definition(null, 
  "In the maintenance of file systems, defragmentation is a process that reduces"+' '+
  "the amount of fragmentation. It does this by physically organizing the"+' '+
  "contents of the mass storage device used to store files into the smallest"+' '+
  "number of contiguous regions (fragments)."
),

React.DOM.h3( {id:"defragmenting-is-moving-empty-hangers-in-your-closet-"}, "Defragmenting is moving empty hangers in your closet."),
React.DOM.p(null, "As people wear clothing in their closet, they tend to take an article from the"+' '+
"rod and leave the hanger in place.  As time passes, as you search for the next"+' '+
"item you want to wear, the hangers start getting in the way."),
React.DOM.p(null, "Then, when your laundry is ready to hang up, what do most people do?  Rather"+' '+
"than search through the hung clothing for a single hanger in which to hang one"+' '+
"of several items... you find all of the empty hangers and move them to one end."+' '+
"This makes it easier to find space for your clothes."),
React.DOM.p(null, "Defragmenting a hard drive is the same idea.  As files are stored, they're"+' '+
"placed in empty space as it becomes available.  When you delete a file, the"+' '+
"space you've allocated for that file is freed, (an empty hanger).  Finding empty"+' '+
"space for your files begins to take longer and longer as time goes on."),
React.DOM.p(null, "When you defragment the hard drive, you move all of the empty space to one part"+' '+
"of the disk, making it easier for the computer to find space for your files,"+' '+
"(and make it easier for the disc to find it later!)"),
React.DOM.p(null, "— ", React.DOM.a( {href:"http://www.github.com/clintandrewhall"}, "@clintandrewhall"))
);
  props = _runtime.merge(module.exports.meta, props);
  return _Component.apply(_Component, [props].concat(_markup));
};
module.exports.meta   = {"title":"Defragmenting"};
var App = require("./../jsx/App");
var Definition = require("./../jsx/Definition");
var MainPage = require("./../jsx/MainPage");
var Nav = require("./../jsx/Nav");
var Term = require("./../jsx/Term");
var Titlebar = require("./../jsx/Titlebar");