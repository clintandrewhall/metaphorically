require('node-jsx').install({extension: '.jsx'});

var gulp = require('gulp');
var gutil = require('gulp-util');
var clean = require('gulp-clean');
var nodemon = require('gulp-nodemon');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');

// Default
// =====================================
gulp.task('default', ['serve'], function() {});

// start server with nodemon
gulp.task('serve', ['build'], function(callback) {
  nodemon({
    script: 'server.js',
    ext: 'jsx, js',
    env: { 'NODE_ENV': 'development' } ,
    ignore: ['./node_modules/**'],
    watch: ['./public/components', './terms/js', './server.js', './metaphors.js', './build.js']
  }).on('start', function () {
    // browserSync.init('dist/css/*.css', {
    //   server: false
    // });
    // gulp.watch(paths.css, ['less']);
    // gulp.watch(paths.jsx, ['jsx']);
    // gulp.watch(paths.md, ['md']);
  });
});

// Clean
// =====================================
gulp.task('clean', function() {
  gulp.src('dist', {read: false})
  .pipe(clean());
});

// Build
// =====================================
gulp.task('build', ['clean', 'markdown'], function() {});

gulp.task('markdown', ['clean'], function() {
  var child = require('child_process').fork('build.js');
});

gulp.task('webpack:build', function(callback) {
  // Modify some webpack config options
  var myConfig = Object.create(webpackConfig);

  myConfig.plugins = myConfig.plugins.concat(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  );

  // Run webpack
  webpack(myConfig, function(err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack:build', err);
    }

    gutil.log('[webpack:build]', stats.toString({
      colors: true
    }));

    callback();
  });
});
