var gulp = require('gulp');
var notify = require("gulp-notify");
var changed = require('gulp-changed');
var concat = require('gulp-concat');

var autoprefixer = require('gulp-autoprefixer');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var webserver = require('gulp-webserver');
var imagemin = require('gulp-imagemin');

var bower = require('gulp-bower');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var cssmin = require('gulp-minify-css');

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');

var onError = function(err) {
    console.log(err);
}

gulp.task('scripts', function() {
  var bundleStream = browserify('./src/js/main.js').bundle()

  bundleStream
    .pipe(source('main.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(streamify(uglify()))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('styles', function() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(sass())
        .pipe(autoprefixer())
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

gulp.task('js', function() {
    return gulp.src(['./src/js/*.js', '!./src/js/main.js'])
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('jade', function() {
    return gulp.src(['src/views/*.jade', '!./src/views/_*'])
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(jade({ pretty: true, doctype: 'HTML' }))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('./src/js/*.js', ['scripts', 'js']);
    gulp.watch('./src/scss/*.scss', ['styles']);
    gulp.watch('./src/views/*.jade', ['jade']);
    gulp.watch('./src/images/**/*', ['images']);
    gulp.watch('./bower_components/**/*', ['bower']);
});

gulp.task('server', function() {
    gulp.src('./dist')
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(webserver({
            port: '3000',
            livereload: true,
            directoryListing: false
        }));
});

gulp.task('default', ['scripts', 'js', 'styles', 'jade', 'images', 'watch']);
gulp.task('build', ['scripts', 'js', 'styles', 'jade', 'images']);
gulp.task('serve', ['watch', 'server']);