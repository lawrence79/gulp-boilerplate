var gulp = require('gulp');
var plumber = require('gulp-plumber');
var jade = require('gulp-jade');
var notify = require('gulp-notify');



gulp.task('jade', function() {
    var onError = function(err) {
        notify.onError({
            title: "Gulp",
            subtitle: "Failure!",
            message: "Error: <%= error.message %>",
            sound: "Beep"
        })(err);

        this.emit('end');
    };
    return gulp.src(['src/views/*.jade', '!./src/views/_*'])
        .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
        .pipe(jade({ pretty: true, doctype: 'HTML' }))
        .pipe(gulp.dest('dist'))
        .pipe(notify({ // Add gulpif here
            title: 'Gulp',
            subtitle: 'success',
            message: 'Jade task',
            sound: "Pop"
        }));
});
