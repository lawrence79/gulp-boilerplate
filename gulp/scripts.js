var gulp = require('gulp');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var rename = require("gulp-rename");
var notify = require('gulp-notify');



gulp.task('scripts', function() {
    var onError = function(err) {
        notify.onError({
            title: "Gulp",
            subtitle: "Failure!",
            message: "Error: <%= error.message %>",
            sound: "Beep"
        })(err);

        this.emit('end');
    };
    var bundleStream = browserify('./src/js/main.js').bundle()

    bundleStream
        .pipe(source('main.js'))
        .pipe(plumber({ errorHandler: onError }))
        .pipe(gulp.dest('./dist/js'))
        .pipe(streamify(uglify()))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(notify({
            title: 'Gulp',
            subtitle: 'success',
            message: 'Scripts task',
            sound: "Pop"
        }))
        .pipe(gulp.dest('./dist/js'));
});
