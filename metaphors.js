var dir = require('node-dir'),
  fs = require('fs'),
  async = require('async');

var MetaphorLibrary = function(terms) {
  var termMap = {};

  terms.forEach(function(term) {
    termMap[term.id] = term;
  });

  return {
    getTerms: function() {
      return terms;
    },
    getTermById: function(id) {
      return termMap[id];
    }
  };
};

function createTerm(file, callback) {
  var dirs = file.split('/'),
    id = dirs.pop().split('.md')[0],
    name = id.replace('-', ' ').toLowerCase();

  fs.readFile(file, {
    encoding: 'UTF-8'
  }, function(err, md) {
    if (err) {
      return callback(err);
    }
    var lines = md.split('\n'),
      title = lines[1],
      term = {
        'id': id,
        'name': name,
        'title': title,
        'href': '/term/' + id,
        'md': md
      };
    callback(null, term);
  });
}

var Metaphors = {
  buildLibrary: function(root, callback) {
    dir.files(__dirname + root, function(err, files) {
      async.mapSeries(files, function(file, callback) {
        createTerm(file, callback);
      }, function(err, terms) {
        callback(err, new MetaphorLibrary(terms));
      });
    });
  }
};

module.exports = Metaphors;
