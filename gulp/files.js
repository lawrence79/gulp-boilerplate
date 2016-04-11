var gulp = require('gulp');
var plumber = require('gulp-plumber');

gulp.task('files', function() {
    return gulp.src(['./src/js/*.js', '!./src/js/main.js'])
        .pipe(plumber())
        .pipe(gulp.dest('./dist/js'));
});
