var gulp = require('gulp');

gulp.task('default', ['pug', 'scripts', 'images', 'scss', 'files']);
gulp.task('build-dev', ['pug', 'scripts', 'images', 'scss', 'files']);
gulp.task ('server', ['webserver', 'watch']);