var dir = require('node-dir'),
  async = require('async'),
  fs = require('fs'),
  fse = require('fs-extra'),
  reactdown = require('reactdown'),
  Metaphors = require('./metaphors'),
  appRoot = require('app-root-path'),
  src = appRoot + '/metaphors';
  root = appRoot + '/public';

var markdown = {};

function saveFiles(opts, callback) {
  Metaphors.buildLibrary('/public/md', opts, function(err, library) {
    if (err) {
      return callback(err);
    }
    var metaphors = library.getTermList();

    var jsx = fs.readdir(appRoot + '/client/jsx', function(err, files) {
      if (err) {
        return callback(err);
      };
      files = files.map(function(file) {
        return file.split('/').pop().split('.jsx')[0];
      });

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
        });

        files.forEach(function(file) {
          if (file !== 'index') {
            content = content.replace(new RegExp('<' + file), function(match) {
              return match += ' term={props.term}';
            });
          }
        });
        // Add Component definitions
        var lines = content.split('\n'),
          front = [lines.shift()];
        front.push('scope:');
        files.forEach(function(file) {
          if (file !== 'index') {
            front.push('  ' + file + ': ./../jsx/' + file);
          }
        });
        lines = front.concat(lines);
        scanFile.md = lines.join('\n');
      });

      async.each(metaphors, function(metaphor, callback) {
        fse.outputFile(
          root + '/md/' + metaphor.id + '.md',
          metaphor.md,
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

function buildMarkdown(opts, callback) {
  var terms = {};
  console.log(appRoot + '/metaphors');

  dir.readFiles(appRoot + '/metaphors', {
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
      term.path = '/public/md/' + id + '.md';
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

function go(opts, callback) {
  buildMarkdown(opts, function(err) {
    if (err) {
      return callback(err);
    } else {
      saveFiles(opts, function(err) {
        return callback(err);
      });
    }
  });
}

module.exports = go;
