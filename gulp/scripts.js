var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var rename = require("gulp-rename");
var onError = function(err) {
    console.log(err);
};

gulp.task('scripts', function() {
  var bundleStream = browserify('./src/js/main.js').bundle()

  bundleStream
    .pipe(source('main.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(streamify(uglify()))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/js'));
});