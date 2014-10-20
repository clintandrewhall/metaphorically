var dir = require('node-dir'),
  async = require('async'),
  fs = require('fs'),
  fse = require('fs-extra'),
  reactdown = require('reactdown'),
  Metaphors = require('./metaphors'),
  src = __dirname + '/metaphors';
  root = __dirname + '/public';

var markdown = {};

function saveFiles(callback) {
  Metaphors.buildLibrary('/public/md', function(err, library) {
    var metaphors = library.getTermList();
    var jsx = fs.readdir(__dirname + '/client/jsx', function(err, files) {
      if (err) {
        return callback(err);
      };
      files = files.map(function(file) {
        return file.split('/').pop().split('.jsx')[0];
      })
      metaphors.forEach(function(scanFile) {
        var content = markdown[scanFile.id];

        metaphors.forEach(function(libFile) {
          if (libFile.id === scanFile.id) {
            return;
          }

          var search = libFile.title.replace(' ', '[ |\n]'),
            regex = new RegExp('(' + search + ')+', 'gi'),
            found = false;

          content = content.replace(regex, function(match) {
            found = true;
            return '[' + match + '][term-' + libFile.id + ']';
          });

          if (found) {
            content += '\n[term-' + libFile.id + ']:' + libFile.href;
          }

          var lines = content.split('\n'),
            front = [lines.shift()];
          front.push('scope:');
          files.forEach(function(file) {
            if (file !== 'index') {
              front.push('  ' + file + ': ./../jsx/' + file);
            }
          });
          lines = front.concat(lines);
          content = lines.join('\n');
        });

        scanFile.md = reactdown(content, {});
      });

      async.each(metaphors, function(metaphor, callback) {
        fse.outputFile(
          root + '/md/' + metaphor.id + '.js',
          metaphor.md.code,
          function(err) {
            callback(err);
            delete metaphor.md;
          }
        );
      }, function(err) {
        callback(err);
      });
    });
  });
}

function buildMarkdown(callback) {
  var terms = {};

  dir.readFiles('./metaphors', {
    match: /.md$/,
    exclude: /^\./,
    recursive: false
  }, function(err, content, filename, next) {
      if (err) {
        return callback(err);
      }

      var id = filename.split('/').pop().split('.md')[0],
        contents = reactdown(content, {}),
        term = contents.meta;

      term.id = id;
      term.path = filename;
      term.href = '/term/' + id;
      terms[id] = term;
      markdown[id] = content;

      next();
    },
    function() {
      fse.outputFile(root + '/md/meta.js', JSON.stringify(terms), function(err) {
        return callback(err);
      });
    }
  );
}

function go(callback) {
  buildMarkdown(function(err) {
    if (err) {
      return callback(err);
    } else {
      saveFiles(function(err) {
        return callback(err);
      });
    }
  });
}
module.exports = go;
