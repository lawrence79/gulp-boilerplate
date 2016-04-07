var gulp = require('gulp');

gulp.task('watch', function() {
    gulp.watch('./src/js/*.js', ['scripts', 'js']);
    gulp.watch('./src/scss/*.scss', ['styles']);
    gulp.watch('./src/views/*.jade', ['jade']);
    gulp.watch('./src/images/**/*', ['images']);
    gulp.watch('./bower_components/**/*', ['bower']);
});