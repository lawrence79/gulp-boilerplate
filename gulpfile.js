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
var notify = require("gulp-notify");
var bower = require('gulp-bower');
var jade = require('gulp-jade');

var onError = function(err) {
    console.log(err);
}

gulp.task('scripts', function() {
    return gulp.src('./src/js/**/*.js')
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist/js/'))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('bower', function() {
  return bower('./bower_components')
    .pipe(gulp.dest('./dist/js/lib/'))
});

gulp.task('styles', function() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(plumber({
            errorHandler: onError
        }))
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
    return gulp.src(['src/*.jade', '!./src/_*'])
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(jade({pretty:true, doctype:'HTML'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('./src/js/*.js', ['scripts']);
    gulp.watch('./src/sass/*.scss', ['styles']);
    gulp.watch('./src/*.jade', ['jade']);
    gulp.watch('./src/images/**/*', ['images']);
    gulp.watch('./bower_components/**/*', ['bower']);
});

gulp.task('webserver', function() {
    gulp.src('./dist')
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(webserver({
            port: "3000",
            livereload: true,
            directoryListing: false
        }));
});

gulp.task('default', ['bower', 'scripts', 'styles', 'jade', 'images', 'watch']);
