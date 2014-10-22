var browserSync = require('browser-sync'),
  build = require('./build'),
  clean = require('gulp-clean'),
  del = require('del'),
  gulp = require('gulp'),
  less = require('gulp-less'),
  nodemon = require('gulp-nodemon'),
  react = require('gulp-react'),
  reload = browserSync.reload;

var paths = {
  css: './client/css/**/*.less',
  js: './client/js/**/*.js',
  images: './client/images/**/*.*',
  jsx: './client/jsx/**/*.jsx',
  md: './metaphors/**/*.md',
  server: 'server.js'
};

gulp.task('less', ['clean-css'], function() {
  return gulp.src(paths.css)
    .pipe(less())
    .pipe(gulp.dest('./public/css'))
    .pipe(reload({ stream: true }));
});

gulp.task('jsx', ['clean-jsx'], function() {
  return gulp.src(paths.jsx)
    .pipe(react())
    .pipe(gulp.dest('./public/jsx'));
});

gulp.task('images', ['clean-jsx'], function() {
  return gulp.src(paths.images)
    .pipe(gulp.dest('./public/images'));
});

gulp.task('md', ['clean-md'], function(callback) {
  return build({}, callback);
});

// start server with nodemon
gulp.task('serve', ['clean', 'build'], function(callback) {
  nodemon({
    script: 'server.js',
    ext: 'jsx, js',
    env: { 'NODE_ENV': 'development' } ,
    ignore: ['./node_modules/**', './public/cache/**'],
    watch: ['./public/jsx', './public/md', './server.js', './metaphors.js', './build.js']
  }).on('start', function () {
    browserSync.init('public/css/*.css', {
      server: false
    });
    gulp.watch(paths.css, ['less']);
    gulp.watch(paths.jsx, ['jsx']);
    gulp.watch(paths.md, ['md']);
  });
});

gulp.task('clean', ['clean-jsx', 'clean-images', 'clean-css', 'clean-md', 'clean-cache']);

gulp.task('clean-cache', function(cb) {
    del(['public/cache'], cb);
});

gulp.task('clean-images', function(cb) {
    del(['public/images'], cb);
});

gulp.task('clean-jsx', function(cb) {
    del(['public/jsx'], cb);
});

gulp.task('clean-css', function(cb) {
    del(['public/css'], cb);
});

gulp.task('clean-md', function(cb) {
    del(['public/md'], cb);
});

gulp.task('build', ['clean', 'less', 'jsx', 'md', 'images']);
gulp.task('default', ['clean', 'build', 'serve']);
