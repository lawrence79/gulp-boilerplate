var gulp = require('gulp');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var rename = require("gulp-rename");
var cssmin = require('gulp-clean-css');
var sass = require('gulp-sass');



gulp.task('scss', function() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./dist/css/'))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/css/'));
});
