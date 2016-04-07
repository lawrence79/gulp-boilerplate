var gulp = require('gulp');
gulp.watch('./bower_components/**/*', ['bower']);

gulp.task('watch', function() {
    gulp.watch('./src/js/*.js', ['scripts', 'files']);
    gulp.watch('./src/scss/*.scss', ['scss']);
    gulp.watch('./src/views/*.jade', ['jade']);
    gulp.watch('./src/images/**/*', ['images']);
    gulp.watch('./bower_components/**/*', ['bower']);
});
