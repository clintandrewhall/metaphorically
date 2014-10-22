var  fse = require('fs-extra'),
  fs = require('fs'),
  async = require('async'),
  reactdown = require('reactdown'),
  appRoot = require('app-root-path'),
  root = '/public/md',
  out = '/public/md-js';

var MetaphorLibrary = function(terms, opts, callback) {
  if (!terms) {
    return callback('No terms available.');
  }

  var keys = Object.keys(terms),
    list = Object.keys(terms).map(function(key) {
      return terms[key];
    }),
    api = {
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

  // We want to write/store the reactdown when we start the server.
  if (opts.writeReactdown) {
    async.each(keys, function(key, callback) {
      writeReactdown(terms[key], function(err, term) {
        return callback(err, true);
      });
    }, function(err) {
      return callback(err, api);
    });
  } else {
    return callback(null, api)
  }
};

// Write the blended md and React code to the public directory.
function writeReactdown(term, callback) {
file = fs.readFile(term.path, {encoding: 'UTF-8'}, function(err, data) {
  if (err) {
    return callback(err);
  }
  var md = reactdown(data, {}),
    path = out + '/' + term.id + '.js',
    writePath = appRoot + path;

  fse.outputFile(writePath, md.code, function(err) {
    if (err) {
      return callback(err);
    }
    term.path = path;
    return callback(null, term);
  });
});
}

module.exports = {
  // Read the manifest from the root, as there should be one containing meta
  // data with details about md files in the root.
  buildLibrary: function(root, opts, callback) {
    fse.readJSON(
      appRoot + root + '/manifest.js',
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
