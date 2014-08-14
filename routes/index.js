var express = require('express')
  , router = express.Router()
  , Metaphors = require('./../metaphors')
  , marked = require('marked');

var metaphors = new Metaphors('/metaphors');

/* GET home page. */
router.get('/', function(req, res) {
  console.log(metaphors.getAllTopics());
  res.render('index', { title: 'Metaphorical Geek', topics: metaphors.getAllTopics() });
});

/* GET metaphor. */
router.get('/:topic', function(req, res) {
  var metaphor = metaphors.getTopic(req.params.topic);
  marked.parse(metaphor.md, function(err, result) {
    res.render('topic', { title: metaphor.name, md: result });
  });
});


module.exports = router;
