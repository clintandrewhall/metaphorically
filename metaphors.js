var dir = require('node-dir'),
  fs = require('fs'),
  async = require('async');

var MetaphorLibrary = function(topics) {
  var topicMap = {};

  topics.forEach(function(topic) {
    topicMap[topic.id] = topic;
  });

  return {
    getTopics: function() {
      return topics;
    },
    getTopicById: function(id) {
      return topicMap[id];
    }
  };
};

function createTopic(file, callback) {
  var dirs = file.split('/'),
    id = dirs.pop().split('.md')[0],
    name = id.replace('-', ' ').toLowerCase();

  fs.readFile(file, {
    encoding: 'UTF-8'
  }, function(err, md) {
    if (err) {
      return callback(err);
    }
    var lines = md.split('\n'),
      title = lines[1],
      topic = {
        'id': id,
        'name': name,
        'title': title,
        'href': '/topic/' + id,
        'md': md
      };
    callback(null, topic);
  });
}

var Metaphors = {
  buildLibrary: function(root, callback) {
    dir.files(__dirname + root, function(err, files) {
      async.mapSeries(files, function(file, callback) {
        createTopic(file, callback);
      }, function(err, topics) {
        callback(err, new MetaphorLibrary(topics));
      });
    });
  }
};

module.exports = Metaphors;
