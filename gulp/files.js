var gulp = require('gulp');
var plumber = require('gulp-plumber');

var onError = function(err) {
    console.log(err);
};

gulp.task('files', function() {
    return gulp.src(['./src/js/*.js', '!./src/js/main.js'])
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(gulp.dest('./dist/js'));
});