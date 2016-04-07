var gulp = require('gulp');
var plumber = require('gulp-plumber');
var jade = require('gulp-jade');
var onError = function(err) {
    console.log(err);
};
gulp.task('jade', function() {
    return gulp.src(['src/views/*.jade', '!./src/views/_*'])
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(jade({ pretty: true, doctype: 'HTML' }))
        .pipe(gulp.dest('dist'));
});