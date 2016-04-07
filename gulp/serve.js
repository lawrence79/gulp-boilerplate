var gulp = require('gulp');

gulp.task('default', ['jade', 'scripts', 'images', 'scss', 'files']);
gulp.task('serve', ['default', 'watch', 'server']);