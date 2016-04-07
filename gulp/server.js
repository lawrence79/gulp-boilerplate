var gulp = require('gulp');
var plumber = require('gulp-plumber');
var webserver = require('gulp-webserver');

var onError = function(err) {
    console.log(err);
};

gulp.task('server', function() {
    gulp.src('./dist')
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(webserver({
            port: '3000',
            livereload: true,
            directoryListing: false
        }));
});