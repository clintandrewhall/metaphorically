var express = require('express')
  , path = require('path')
  , favicon = require('static-favicon')
  , logger = require('morgan')
  , cookieParser = require('cookie-parser')
  , bodyParser = require('body-parser')
  , routes = require('./routes/index')
  , app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon())
  .use(logger('dev'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded())
  .use(cookieParser())
  .use(require('stylus').middleware(path.join(__dirname, 'public')))
  .use(express.static(path.join(__dirname, 'public')))
  .use('/', routes)
  .use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
