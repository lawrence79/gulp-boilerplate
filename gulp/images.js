var gulp = require('gulp');
var plumber = require('gulp-plumber');
var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');
var notify = require('gulp-notify');

var onError = function(err) {
    console.log(err);
};
gulp.task('images', function() {
    var imgSrc = './src/images/**/*',
        imgDst = './dist/images';

    return gulp.src(imgSrc)
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(changed(imgDst))
        .pipe(imagemin())
        .pipe(gulp.dest(imgDst))
        .pipe(notify({ message: 'Images task complete' }));
});