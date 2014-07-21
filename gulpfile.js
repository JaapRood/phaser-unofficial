var gulp = require('gulp'),
  bowerFiles = require('main-bower-files');

gulp.task('build', function() {
  gulp.src(bowerFiles())
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['build']);