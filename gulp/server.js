var gulp = require('gulp');
var plumber = require('gulp-plumber');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {



    gulp.src('./dist')
        .pipe(plumber())
        .pipe(webserver({
            port: '3000',
            livereload: true,
            directoryListing: false
        }));

});
