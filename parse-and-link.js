var dir = require('node-dir')
  , Metaphors = require('./metaphors')
  , Q = require('q')
  , FS = require('q-io/fs')
  , root = __dirname + '/lib/metaphors';

function createFiles() {
  return Metaphors('/metaphors').then(
    function(metaphors) {
      metaphors.forEach(function(scanFile) {
        metaphors.forEach(function(libFile) {
          if (libFile.id === scanFile.id) {
            return;
          }
          var search = libFile.title.replace(' ', '[ |\n]')
            , regex = new RegExp('(' + search + ')+', 'gi');

          scanFile.md = scanFile.md.replace(regex, function(match) {
            return '[' + match + '][topic-' + libFile.id + ']';
          });

          scanFile.md += '\n[topic-' + libFile.id + ']:[' + libFile.href + ']';
        })
      });
      return metaphors;
    }).then(function(metaphors) {
      metaphors.forEach(function(file) {
        FS.makeTree(root + file.path).then(function() {
          return FS.write(root + file.path + file.id + '.md', file.md);
        }, function(reason) {
          console.log(reason);
        });
      });
    });
}

FS.isDirectory(root).then(function(isDirectory) {
  if (isDirectory) {
    return FS.removeTree(root).then(function() {
      return FS.makeDirectory(root).then(createFiles)
    });
  } else {
    return createFiles();
  }
}, function(reason) {
  console.log(reason);
});
