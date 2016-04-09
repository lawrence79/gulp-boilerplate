var gulp = require('gulp');
var plumber = require('gulp-plumber');
var webserver = require('gulp-webserver');
var notify = require('gulp-notify');
var debug = require('gulp-debug');

gulp.task('webserver', function() {

    var onError = function(err) {
        notify.onError({
            title: "Gulp",
            subtitle: "Failure!",
            message: "Error: <%= error.message %>",
            sound: "Beep"
        })(err);

        this.emit('end');
    };

    gulp.src('./dist')
        .pipe(debug({title: 'server:'}))
        .pipe(plumber({ errorHandler: onError }))
        .pipe(webserver({
            port: '3000',
            livereload: true,
            directoryListing: false
        }))
        .pipe(notify({ // Add gulpif here
            title: 'Gulp',
            subtitle: 'success',
            message: 'Server started',
            sound: "Pop"
        }));
});
