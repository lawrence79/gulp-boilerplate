var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-minify-css');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');
var webserver = require('gulp-webserver');
var imagemin = require('gulp-imagemin');
var jade = require('gulp-jade');

var onError = function(err) {
    console.log(err);
}

gulp.task('scripts', function() {
  return gulp.src('./src/js/**/*.js')
    .pipe(plumber())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/js/'));
});


gulp.task('styles', function() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('./dist/css/'))
    .pipe(cssmin())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/css/'));
});

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


gulp.task('jade', function() {
  return gulp.src('src/*.jade')
  .pipe(plumber())
  .pipe(jade())
  .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('./src/js/*.js', ['scripts']);
  gulp.watch('./src/sass/*.scss', ['styles']);
  gulp.watch('./src/*.jade', ['jade']);
  gulp.watch('./src/images/**/*', ['images']);
});

gulp.task('webserver', function() {
  gulp.src('./dist')
    .pipe(plumber())
    .pipe(webserver({
      port: "3000",
      livereload: true,
      directoryListing: false
    }));
});

gulp.task('default', ['scripts', 'styles', 'jade', 'images', 'watch', 'webserver']);