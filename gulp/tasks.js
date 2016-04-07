var gulp = require('gulp');

gulp.task('default', ['jade', 'scripts', 'images', 'scss', 'files', 'watch']);
gulp.task('dev', ['watch']);
gulp.task ('serve', ['server']);