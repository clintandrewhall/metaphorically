var dir = require('node-dir'),
  async = require('async'),
  fs = require('fs'),
  fse = require('fs-extra'),
  Metaphors = require('./metaphors'),
  src = __dirname + '/metaphors';
  root = __dirname + '/lib/metaphors';

function saveFiles(callback) {
  Metaphors.buildLibrary('/lib/metaphors', function(err, library) {
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
          scanFile.md += '\n[topic-' + libFile.id + ']:' + libFile.href;
        }
      });
    });

    async.each(metaphors, function(metaphor) {
      fse.outputFile(
        root + '/' + metaphor.id + '.md',
        metaphor.md,
        function(err) {
          callback(err);
        }
      );
    }, function(err) {
      callback(err);
    });
  });
}

function buildMarkdown(dirname, callback) {
  contents = '';

  dir.readFiles(dirname, {
    match: /.md$/,
    exclude: /^\./
  }, function(err, content, filename, next) {
      if (err) {
        callback(err);
      }
      var id = filename.split('/').pop().split('.md')[0];
      contents += '<a name="' + id + '"></a>\n' + content + '\n';
      next();
    },
    function(err) {
      if (err) {
        return callback(err);
      }
      var id = dirname.split('/').pop();
      fse.outputFile(root + '/' + id + '.md', contents, function(err) {
        callback(err);
      });
    }
  );
}

function go() {
  fse.remove(root, function(err) {
    if (err) {
      console.log(err);
    }
    dir.subdirs(src, function(err, dirs) {
      async.mapSeries(dirs, buildMarkdown, function(err, files) {
        saveFiles(function(err) {
          if (err) {
            console.log(err);
          }
        })
      });
    });
  });
}

module.exports = go;
