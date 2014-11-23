var dir = require('node-dir'),
  async = require('async'),
  fs = require('fs'),
  fse = require('fs-extra'),
  reactdown = require('reactdown'),
  src = './metaphors';
  root = './terms';

var markdown = {};

function saveFiles(terms, callback) {
  var metaphors = Object.keys(terms);
  var jsx = fs.readdir('./public/components', function(err, files) {
    if (err) {
      return callback(err);
    };

    files = files.map(function(file) {
      return file.split('/').pop().split('.jsx')[0];
    });

    metaphors.forEach(function(scanTerm) {
      var content = markdown[scanTerm];
      metaphors.forEach(function(libTerm) {
        if (libTerm === scanTerm) {
          return;
        }
        var libFile = terms[libTerm];

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
        if (file !== 'Root') {
          front.push('  ' + file + ': ./../../public/components/' + file);
        }
      });
      lines = front.concat(lines);
      markdown[scanTerm] = lines.join('\n');
    });

    async.each(metaphors, function(metaphor, callback) {
      var md = markdown[metaphor];
      var js = reactdown(md, {}).code;

      fse.outputFile(root + '/md/' + metaphor + '.md', md);
      fse.outputFile(root + '/js/' + metaphor + '.js', js);
    }, function(err) {
      callback(err);
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

      // Hacky, hacky...
      content = content.replace(/(<\/?[A-Z]\S[^>]*\/?>)/gm, function(match) {
        return '\n\n' + match + '\n\n';
      });

      var id = filename.split('/').pop().split('.md')[0],
        contents = reactdown(content, {}),
        term = contents.meta;

      term.id = id;
      term.path = {
        'md': '/terms/md/' + id + '.md',
        'js': '/terms/js/' + id + '.js'
      };
      term.href = '/term/' + id;
      terms[id] = term;
      markdown[id] = content;
      next();
    },
    function() {
      fse.outputFile(root + '/js/manifest.json', JSON.stringify(terms), function(err) {
        saveFiles(terms, function(err) {
          return callback(err);
        });
      });
    }
  );
}

function go(opts, callback) {
  buildMarkdown(function(err, terms) {
    if (err) {
      return callback(err);
    }
  });
}

go({}, function() {});

module.exports = go;
