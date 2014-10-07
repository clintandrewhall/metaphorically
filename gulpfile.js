var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  imagemin = require('gulp-imagemin'),
  sourcemaps = require('gulp-sourcemaps'),
  del = require('del'),
  less = require('gulp-less'),
  path = require('path'),
  nodemon = require('gulp-nodemon'),
  jshint = require('gulp-jshint'),
  notify = require('gulp-notify'),
  parse = require('./parse-and-link');

var paths = {
  js: 'client/js/**/*',
  jsx: 'components/**/*',
  css: 'client/css/style.less',
  images: 'client/img/**/*',
  server: 'server.js'
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use all packages available on npm
gulp.task('clean', function(cb) {
  // You can use multiple globbing patterns as you would with `gulp.src`
  del(['build'], cb);
});

gulp.task('less', function () {
  gulp.src(paths.css)
    .pipe(less())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('scripts', ['clean'], function() {
  // Minify and copy all JavaScript (except vendor scripts)
  // with sourcemaps all the way down
  return gulp.src(paths.js)
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'));
});

// Copy all static images
gulp.task('images', ['clean'], function() {
  return gulp.src(paths.images)
    // Pass in options to the task
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('build/img'));
});

gulp.task('jsx', ['clean'], function() {
  return gulp.src(paths.jsx);
});

gulp.task('build', ['clean', 'less', 'scripts', 'images'], function() {
  return parse();
});

// start server with nodemon
gulp.task('serve', function(){
  nodemon({script: paths.server});
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.js, ['js']);
  gulp.watch(paths.jsx, ['jsx']);
  gulp.watch(paths.css, ['less']);
  gulp.watch(paths.images, ['images']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['build', 'serve', 'watch']);
