var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  del = require('del'),
  less = require('gulp-less'),
  nodemon = require('gulp-nodemon'),
  notify = require('gulp-notify'),
  parse = require('./parse-and-link'),
  gulp = require('gulp'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload,
  react = require('gulp-react');

var paths = {
  css: './client/css/**/*.less',
  js: './client/js/**/*.js',
  jsx: './client/**/*.jsx',
  md: './metaphors/**/*.md',
  server: 'server.js'
};

gulp.task('less', function() {
  return gulp.src(paths.css)
    .pipe(less())
    .pipe(gulp.dest('./public/css'))
    .pipe(reload({ stream: true }));
});

gulp.task('jsx', function() {
  return gulp.src(paths.jsx)
    .pipe(react())
    .pipe(gulp.dest('./public/jsx'));
});

gulp.task('md', function() {
  parse();
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  browserSync.init(["public"], {
    server: false
  });
  gulp.watch(paths.css, ['less']);
  gulp.watch(paths.jsx, ['jsx']);
  gulp.watch(paths.md, ['md']);
});

// start server with nodemon
gulp.task('serve', function(){
  nodemon({
    script: 'server.js',
    ext: 'jsx, js',
    env: { 'NODE_ENV': 'development' } ,
    ignore: ['./node_modules/**'],
    watch: ['./client', 'server.js', 'metaphors.js', 'parse-and-link.js']
  });
});

gulp.task('build', ['less', 'jsx']);
gulp.task('default', ['build', 'watch', 'serve'])
