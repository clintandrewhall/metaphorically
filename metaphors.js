var  fse = require('fs-extra');

var MetaphorLibrary = function(terms) {
  var list = [],
    keys = Object.keys(terms);

  keys.forEach(function(key) {
    list.push(terms[key]);
  });

  return {
    getTermList: function() {
      return list;
    },
    getTerms: function() {
      return terms;
    },
    getTermIds: function() {
      return Object.keys(terms);
    },
    getTermById: function(id) {
      return terms[id];
    }
  };
};

var Metaphors = {
  buildLibrary: function(root, callback) {
    fse.readJSON(
      __dirname + root + '/meta.js',
      function(err, obj) {
        return callback(err, new MetaphorLibrary(obj));
      }
    );
  }
};

module.exports = Metaphors;
