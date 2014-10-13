var marked = require('marked');
var nodejsx = require('node-jsx').install();
var renderer = new marked.Renderer();
var React = require('react');
var Tools = require('react-tools');
var Text = require('./components/Text.jsx');

renderer.html = function (markup) {
  var t = Tools.transform(markup);
  return t;
},

console.log(marked('<Text>Something</Text>', { renderer: renderer }));
