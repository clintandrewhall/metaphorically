var dir = require('node-dir'),
  Metaphors = require('./metaphors'),
  async = require('async'),
  fs = require('fs'),
  fse = require('fs-extra'),
  root = __dirname + '/lib/metaphors';

function saveFile(file, callback) {
  fse.outputFile(root + file.path, file.md, function(err) {
    if (err) {
      return callback(err);
    }
    return callback();
  });
}

function saveFiles(callback) {
  Metaphors.buildLibrary('/metaphors', function(err, library) {
    var metaphors = library.getTopics();
    metaphors.forEach(function(scanFile) {
      metaphors.forEach(function(libFile) {
        if (libFile.id === scanFile.id) {
          return;
        }
        var search = libFile.title.replace(' ', '[ |\n]'),
          regex = new RegExp('(' + search + ')+', 'gi'),
          found = false;

        scanFile.md = scanFile.md.replace(regex, function(match) {
          found = true;
          return '[' + match + '][topic-' + libFile.id + ']';
        });

        if (found) {
          scanFile.md += '\n[topic-' + libFile.id + ']:[' + libFile.href + ']';
        }
      });
    });

    async.each(metaphors, saveFile, function(err) {
      if (err) {
        console.log(err);
      }
    });
  });
}

fse.remove(root, function(err) {
  if (err) {
    console.log(err);
  }
  saveFiles(function(err) {
    if (err) {
      console.log(err);
    }
  });
});
