var gulp = require('gulp'),
  concat = require('gulp-concat'),
  rimraf = require('gulp-rimraf'),
  header = require('gulp-header');

var phaserPath = './bower_components/phaser/custom/phaser-no-libs.js',
  pixiPath = './bower_components/phaser/custom/pixi.js';

gulp.task('build', function() {
  // copy pixi
  gulp.src(pixiPath)
    .pipe(gulp.dest('./dist'));

  // inject Pixi at the top (very hacky, but what else can we do?)
  // and copy Phaser
  gulp.src(phaserPath)
    .pipe(header("var PIXI = require('./pixi');\n"))
    .pipe(gulp.dest('./dist'));
});

gulp.task('clean', function() {
  gulp.src('./dist')
   .pipe(rimraf());
});

gulp.task('default', ['clean', 'build']);