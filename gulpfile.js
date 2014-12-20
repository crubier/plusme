var gulp = require('gulp');
var browserify = require('gulp-browserify');
var clean = require('gulp-clean');


gulp.task('default',['client-script','server-script']);


gulp.task('client-script', function() {
  return gulp.src('src/client/client.js')
  .pipe(browserify({insertGlobals : true}))
  .pipe(gulp.dest('dist/client'))
});



gulp.task('server-script', function() {
  return gulp.src('src/server/server.js')
  .pipe(gulp.dest('dist/server'))
});



gulp.task('clean', function () {
  return gulp.src('dist', {read: false})
  .pipe(clean());
});
