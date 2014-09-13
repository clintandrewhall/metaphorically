var dir = require('node-dir')
  , fs = require('fs')
  , Q = require('q');

var topics = [];

function getFileDefinitions(paths, directory) {
  var files = paths.files;
  var readFile = Q.denodeify(fs.readFile);

  return files.map(function(file) {
    var raw = file.split(__dirname + directory + '/')[1].split('.md')[0]
      , dirs = raw.split('/')
      , id = dirs.pop()
      , name = id.replace('-', ' ').toLowerCase();
    return readFile(file, { encoding: 'UTF-8'}).then(
      function(md) {
        var title = md.split('\n')[0]
          , path = '/' + dirs.join('/') + '/';
          
        return {
          'id': id,
          'name': name,
          'path': path,
          'title': title,
          'href': path + id,
          'md': md
        };
      }
    );
  });
}

var Metaphors = function(directory) {
  var paths = Q.denodeify(dir.paths);
  return Q.all(
    paths(__dirname + directory).then(function(paths) {
      return getFileDefinitions(paths, directory);
    })
  );
}

module.exports = Metaphors;
