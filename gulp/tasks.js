var gulp = require('gulp');

gulp.task('default', ['jade', 'scripts', 'images', 'scss', 'files']);
gulp.task('build-dev', ['jade', 'scripts', 'images', 'scss', 'files']);
gulp.task ('server', ['webserver', 'watch']);