/* ES5 */
var gulp = require('gulp'),
    fs = require('fs'),
    source = require('vinyl-source-stream'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    minifyify = require('minifyify'),
    watchify = require('watchify'),
    path = require('path');

var bundler = browserify({
  entries: ['babel/app.js'],
  transform: [[babelify, {presets: ["es2015", "react"]}]],
  debug: true // sourcemapping
});

gulp.task('browserify', function () {
  process.env.NODE_ENV = 'production';
  bundler.plugin('minifyify', {map: 'map.json', output: './public/map.json'});
  bundler.bundle().pipe(fs.createWriteStream("public/bundle.js"));
});

gulp.task('watch', function () {
  var watcher = watchify(bundler);
  return watcher
    .on('update', function () {
      var updateStart = Date.now();
      watcher.bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./public/'));
      console.log('Updated in ', (Date.now() - updateStart) + 'ms');
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/'));
});

gulp.task('default', ['watch']);
gulp.task('bundle', ['browserify']);
gulp.task('spa', ['browserify']);
