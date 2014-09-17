var express = require('express'),
  router = express.Router(),
  marked = require('marked');

function create(library) {
  router.use(function(req, res, next) {
    console.log('starting');
    next();
  });

  /* GET home page. */
  router.get('/', function(req, res) {
    console.log('here');
    res.render('index', {
      title: 'Metaphorical Geek',
      topics: library.getTopics()
    });
  });

  /* GET metaphor. */
  router.get('/:topic', function(req, res) {
    var metaphor = library.getTopicById(req.params.topic);
    marked.parse(metaphor.md, function(err, result) {
      res.render('topic', {
        title: metaphor.name,
        md: result
      });
    });
  });

  return router;
}

module.exports = create;
