'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  return gulp.src('scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());gulp
});
 
gulp.task('sass:watch', function () {
  gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: ""
        }
    });
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('default', ['sass', 'sass:watch', 'browser-sync']);