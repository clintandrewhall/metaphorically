var dir = require('node-dir'),
  fs = require('fs'),
  async = require('async');

function createTopic(file, directory, callback) {
  var raw = file.split(__dirname + directory + '/')[1].split('.md')[0],
    dirs = raw.split('/'),
    id = dirs.pop(),
    name = id.replace('-', ' ').toLowerCase();

  fs.readFile(file, {
    encoding: 'UTF-8'
  }, function(err, md) {
    if (err) {
      return callback(err);
    }
    var lines = md.split('\n'),
      title = lines[0],
      path = '/' + dirs.join('/') + '/' + id + '.md',
      topic = {
        'id': id,
        'name': name,
        'dirs': dirs,
        'path': path,
        'title': title,
        'href': id,
        'md': md
      };
    callback(null, topic);
  });
}

function getTopics(paths, directory, callback) {
  var files = paths.files;

  async.map(files, function(file, callback) {
    createTopic(file, directory, callback);
  }, function(err, topics) {
    callback(err, topics);
  });
}

var MetaphorLibrary = function(topics) {
  var topicMap = {};

  topics.forEach(function(topic) {
    topicMap[topic.id] = topic;
  });

  return {
    getTopics: function() {
      return topics;
    },
    getTopicMap: function() {
      return topicMap;
    },
    getTopicById: function(id) {
      return topicMap[id];
    }
  };
};

var Metaphors = {
  buildLibrary: function(directory, callback) {
    dir.paths(__dirname + directory, function(err, paths) {
      getTopics(paths, directory, function(err, topics) {
        callback(err, new MetaphorLibrary(topics));
      });
    });
  }
};

module.exports = Metaphors;
