var gulp = require('gulp');
var plumber = require('gulp-plumber');
var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');


gulp.task('images', function() {

    var imgSrc = './src/images/**/*',
        imgDst = './dist/images';

    return gulp.src(imgSrc)
        .pipe(plumber())
        .pipe(changed(imgDst))
        .pipe(imagemin())
        .pipe(gulp.dest(imgDst));
});
