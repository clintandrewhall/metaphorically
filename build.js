var dir = require('node-dir'),
  async = require('async'),
  fs = require('fs'),
  fse = require('fs-extra'),
  reactdown = require('reactdown'),
  Metaphors = require('./metaphors'),
  appRoot = require('app-root-path'),
  src = appRoot + '/metaphors';
  root = '/public/md',
  jsx = '/public/jsx',
  out = appRoot + root;

var markdown = {};

function saveFiles(opts, callback) {
  // Kick off the Metaphor library build and get the API.
  Metaphors.buildLibrary(root, opts, function(err, library) {
    if (err) {
      return callback(err);
    }
    // Get the list of terms.
    var metaphors = library.getTermList();

    // In order to provide all of the JSX components to our eventual blended
    // files, we need to read them and write them into the resulting MD files.
    fs.readdir(appRoot + '/client/jsx', function(err, files) {
      if (err) {
        return callback(err);
      };
      files = files.map(function(file) {
        return file.split('/').pop().split('.jsx')[0];
      });

      // For each metaphor, scan it for all of the other titles, providing
      // a link if the term is presnt.
      metaphors.forEach(function(scanFile) {
        var content = markdown[scanFile.id];

        metaphors.forEach(function(libFile) {
          if (libFile.id === scanFile.id) {
            return;
          }

          // In case the term breaks a line, build a regex for the
          // eventual replacement.
          var search = libFile.title.replace(' ', '[ |\n]'),
            regex = new RegExp('(' + search + ')+', 'gi'),
            found = false;

          content = content.replace(regex, function(match) {
            found = true;
            return '[' + match + '][term-' + libFile.id + ']';
          });

          // If the term was found, write the annotation to the bottom.
          if (found) {
            content += '\n[term-' + libFile.id + ']:' + libFile.href;
          }
        });

        // The top-level metaphor object need access to the props from the
        // parent.  Let's start with the term.
        files.forEach(function(file) {
          if (file !== 'index') {
            content = content.replace(new RegExp('<' + file), function(match) {
              return match += ' term={props.term}';
            });
          }
        });

        // Add Component definitions, see reactdown module
        var lines = content.split('\n'),
          front = [lines.shift()];
        front.push('scope:');

        files.forEach(function(file) {
          if (file !== 'index') {
            front.push('  ' + file + ': ' + appRoot + jsx + '/' + file);
          }
        });

        lines = front.concat(lines);
        scanFile.md = lines.join('\n');
      });

      // Write the completed blended files to the public directory.
      async.each(metaphors, function(metaphor, callback) {
        fse.outputFile(
          out + '/' + metaphor.id + '.md',
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

  // My custom version of reactdown can leave the JSX tags alone in these
  // blended React/MD files, but they need to be on their own line, (for now).
  dir.readFiles(src, {
    match: /.md$/,
    exclude: /^\./,
    recursive: false
  }, function(err, content, filename, next) {
      if (err) {
        return callback(err);
      }

      // Hacky, hacky... surround the tag with enough newlines that markdown
      // will leave them alone.
      content = content.replace(/(<\/?[A-Z]\S[^>]*\/?>)/gm, function(match) {
        return '\n\n' + match + '\n\n';
      });

      // Write out a manifest of the meta data from the definitions that exist
      // for other processes to use, (without having to scan the dir/files).
      var id = filename.split('/').pop().split('.md')[0],
        term = reactdown(content, {}).meta;

      term.id = id;
      term.path = out + '/' + id + '.md';
      term.href = '/term/' + id;
      terms[id] = term;
      markdown[id] = content;
      next();
    },
    function() {
      fse.outputFile(out + '/manifest.js', JSON.stringify(terms), function(err) {
        return callback(err);
      });
    }
  );
}

module.exports = function(opts, callback) {
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
