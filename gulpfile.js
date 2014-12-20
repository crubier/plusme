var gulp = require('gulp');
var browserify = require('gulp-browserify');
var del = require('del');


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
  return del(['dist']);
});
