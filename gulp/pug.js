var gulp = require('gulp');
var plumber = require('gulp-plumber');
var pug = require('gulp-pug');



gulp.task('pug', function() {
    return gulp.src(['src/views/*.pug', '!./src/views/_*'])
        .pipe(plumber())
        .pipe(pug({ pretty: true}))
        .pipe(gulp.dest('dist'));
});
