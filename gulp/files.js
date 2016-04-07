var gulp = require('gulp');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');


gulp.task('files', function() {
    var onError = function(err) {
        notify.onError({
            title: "Gulp",
            subtitle: "Failure!",
            message: "Error: <%= error.message %>",
            sound: "Beep"
        })(err);

        this.emit('end');
    };
    return gulp.src(['./src/js/*.js', '!./src/js/main.js'])
        .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
        .pipe(gulp.dest('./dist/js'))
        .pipe(notify({ // Add gulpif here
            title: 'Gulp',
            subtitle: 'success',
            message: 'files task',
            sound: "Pop"
        }));
});
