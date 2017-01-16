'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');
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
        proxy: "http://localhost:3000",
        port: 7000,
    });
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("*.js").on('change', browserSync.reload);
});

gulp.task('typescript:watch', function () {
    var tsProject = ts.createProject('tsconfig.json');
    var tsResult = gulp.src("./public/app/*.ts")
        .pipe(tsProject());

    return tsResult.js.pipe(gulp.dest('./public/app'))
    .pipe(browserSync.stream());
});

gulp.task('lint', function () {
  gulp.src('*.js')
    .pipe(jshint())
})
 
gulp.task('develop', function (cb) {
    var started = false;
    
  return nodemon({ script: 
            'server.js'
          , watch: ['*.js']
          , tasks: ['lint'] 
    })
      .on('restart', function () {
        console.log('restarted!')
      })
      .on('crash', function() {
        console.error('Application has crashed!\n')
         stream.emit('restart', 10)  // restart the server in 10 seconds 
      })
    .on('start', function () {
		// to avoid nodemon being started multiple times
		// thanks @matthisk
		if (!started) {
			cb();
			started = true; 
		} 
	});
})

gulp.task('default', ['sass', 'sass:watch', 'browser-sync', 'typescript:watch', 'lint', 'develop']);