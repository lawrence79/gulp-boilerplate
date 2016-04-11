var gulp = require('gulp');
var plumber = require('gulp-plumber');
var pug = require('gulp-pug');
var notify = require('gulp-notify');



gulp.task('pug', function() {
    var onError = function(err) {
        notify.onError({
            title: "Gulp",
            subtitle: "Failure!",
            message: "Error: <%= error.message %>",
            sound: "Beep"
        })(err);

        this.emit('end');
    };
    return gulp.src(['src/views/*.pug', '!./src/views/_*'])
        .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
        .pipe(pug({ pretty: true}))
        .pipe(gulp.dest('dist'))
        .pipe(notify({ // Add gulpif here
            title: 'Gulp',
            subtitle: 'success',
            message: 'Pug task',
            sound: "Pop"
        }));
});
