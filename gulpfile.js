var gulp = require('gulp');
var browserify = require('gulp-browserify');
var webpack = require('gulp-webpack');
var del = require('del');


gulp.task('default',['client','server-script']);

gulp.task('client',['client-script','client-html']);


gulp.task('client-script', function() {
  return gulp.src('src/client/client.js')
  .pipe(browserify())
  .pipe(gulp.dest('dist/client'))
});

gulp.task('client-html', function(){
  return gulp.src('src/client/**/*.html')
  .pipe(gulp.dest('dist/client'))
});


gulp.task('server-script', function() {
  return gulp.src('src/server/server.js')
  .pipe(gulp.dest('dist/server'))
});


gulp.task('clean', function () {
  return del(['dist']);
});
