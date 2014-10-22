var  fse = require('fs-extra'),
  fs = require('fs'),
  async = require('async'),
  reactdown = require('reactdown'),
  appRoot = require('app-root-path'),
  root = appRoot + '/public/md';

function cache(term, callback) {
  file = fs.readFile(appRoot + term.path, {encoding: 'UTF-8'}, function(err, data) {
    if (err) {
      return callback(err);
    }
    var md = reactdown(data, {}),
      path = '/public/cache/' + term.id + '.js';

    fse.outputFile(appRoot + path, md.code, function(err) {
      if (err) {
        return callback(err);
      }
      term.path = path;
      return callback(null, term);
    });
  });
}

var MetaphorLibrary = function(terms, opts, callback) {
  if (!terms) {
    return callback('No terms available.');
  }
  var keys = Object.keys(terms);

  if (opts.cache) {
    async.each(keys, function(key, callback) {
      cache(terms[key], function(err, term) {
        if (err) {
          return callback(err);
        }
        terms[key] = term;
        callback(null);
      });
    }, function(err) {
      var list = [];
      Object.keys(terms).forEach(function(key) {
        list.push(terms[key]);
      });
      var obj = {
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
      }
      return callback(err, obj);
    });
  } else {
    var list = [];
    Object.keys(terms).forEach(function(key) {
      list.push(terms[key]);
    });

    return callback(null, {
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
    });
  }
};

var Metaphors = {
  buildLibrary: function(root, opts, callback) {
    fse.readJSON(
      appRoot + root + '/meta.js',
      function(err, obj) {
        MetaphorLibrary(obj, opts, function(err, library) {
          if (err) {
            return callback(err);
          }
          return callback(err, library);
        });
      });
    }
};

module.exports = Metaphors;
