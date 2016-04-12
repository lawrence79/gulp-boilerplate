var gulp = require('gulp');

gulp.task('default', ['files', 'pug', 'scripts', 'images', 'scss']);

gulp.task('build-dev', ['files', 'pug', 'scripts', 'images', 'scss']);

gulp.task ('server', ['webserver', 'watch']);

gulp.task('watch', function() {
    gulp.watch('./src/js/**/*.js', ['scripts', 'files']);
    gulp.watch('./src/scss/**/*.scss', ['scss']);
    gulp.watch('./src/views/**/*.pug', ['pug']);
    gulp.watch('./src/images/**/*', ['images']);
});
