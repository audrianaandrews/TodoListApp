'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var ts = require("gulp-typescript");

gulp.task('sass', function () {
  return gulp.src('scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
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
    gulp.watch("app/*.js").on('change', browserSync.reload);
});

gulp.task('typescript:watch', function () {
    var tsProject = ts.createProject('tsconfig.json');
    var tsResult = gulp.src("*.ts")
        .pipe(tsProject());


    return tsResult.js.pipe(gulp.dest('app'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['sass', 'sass:watch', 'browser-sync', 'typescript:watch']);
