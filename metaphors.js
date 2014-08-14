var dir = require('node-dir')
  , fs = require('fs');

var topics = [];

var Metaphors = function(directory) {
  function handlePaths(err, paths) {
    var files = paths.files;

    return files.forEach(function(file) {
      var raw = file.split(__dirname + directory + '/')[1].split('.md')[0];
      var tags = raw.split('/');
      var name = tags.pop();
      var md = fs.readFileSync(file, {encoding: 'UTF-8'});
      console.log(md);

      topics[name] = {
        'name': name,
        'tags': tags,
        'path': file,
        'href': '/' + name,
        'md': md
      };
    });
  }

  dir.paths(__dirname + directory, function(err, paths) {
    handlePaths(err, paths);
    console.log(topics);
  });

  function getTopic(name) {
    return topics[name];
  }

  function getAllTopics() {
    return Object.keys(topics).map(function(key) {
      return topics[key];
    });
  }

  function getAllTopicNames() {
    return topics.keys();
  }

  return {
    'getTopic' : getTopic,
    'getAllTopics' : getAllTopics,
    'getAllTopicNames' : getAllTopicNames
  };
};

module.exports = Metaphors;