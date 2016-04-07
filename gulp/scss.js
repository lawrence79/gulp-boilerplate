var gulp = require('gulp');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var rename = require("gulp-rename");
var cssmin = require('gulp-minify-css');
var sass = require('gulp-sass');
var notify = require('gulp-notify');

var onError = function(err) {
    console.log(err);
};

gulp.task('scss', function() {
    var onError = function(err) {
        notify.onError({
            title: "Gulp",
            subtitle: "Failure!",
            message: "Error: <%= error.message %>",
            sound: "Beep"
        })(err);

        this.emit('end');
    };

    return gulp.src('./src/scss/**/*.scss')
        .pipe(plumber({ errorHandler: onError }))
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./dist/css/'))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(notify({ // Add gulpif here
            title: 'Gulp',
            subtitle: 'success',
            message: 'Sass task',
            sound: "Pop"
        }));
});
