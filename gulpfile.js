var gulp = require('gulp');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var version = require('gulp-version-number');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

function BuildConfiguration(filePaths, folderDist, compiledFileName) {
  this.src = filePaths;
  this.dist = folderDist;
  this.fileName = compiledFileName;
  this.completePath = function() {
    return this.dist + this.fileName;
  };
}

var path = '*.html';
var config = {
  'replaces': [
    [/\.css(?!\()(\?\d+)?/g, '.css?' + Math.floor(Math.random() * 1000)]
  ]
};

gulp.task('style', function() {
  return gulp.src('assets/css/styles.styl')
    .pipe(stylus())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('version-number', function() {
  return gulp.src(path, {
      base: ''
    })
    .pipe(version(config))
    .pipe(gulp.dest(''));
});

gulp.task('uglify', function() {
  gulp.src('assets/libs/*/*.js')
    .pipe(concat('libs.js'))
    .pipe(uglify({
      mangle: false
    }))
    .pipe(gulp.dest('dist'))

  gulp.src('app/*.js')
    .pipe(concat('module.js'))
    .pipe(uglify({
      mangle: false
    }))
    .pipe(gulp.dest('dist'))

  gulp.src('app/*/*/*.js')
    .pipe(concat('scripts.js'))
    .pipe(uglify({
      mangle: false
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('watch', function() {
  var configStyles = new BuildConfiguration(['assets/css/*.styl'], 'assets/css', 'assets/css/styles.css');
  gulp.watch(configStyles.src, ['style']);

  gulp.watch(['app/*/*/*.js', 'app/*.js'], ['uglify']);
});

gulp.task('default', ['version-number', 'style', 'uglify']);
gulp.run('watch');
