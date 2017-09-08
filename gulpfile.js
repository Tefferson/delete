var gulp = require('gulp');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var version = require('gulp-version-number');
var cleanCSS = require('gulp-clean-css');

function BuildConfiguration(filePaths, folderDist, compiledFileName) {
    this.src = filePaths;
    this.dist = folderDist;
    this.fileName = compiledFileName;
    this.completePath = function () {
        return this.dist + this.fileName;
    };
}

var path = '*.html';
var config = {
    'replaces':
        [
            [/\.js(\?\d+)?/g, '.js?' + Math.floor(Math.random() * 1000)],
            [/\.css(?!\()(\?\d+)?/g, '.css?' + Math.floor(Math.random() * 1000)]
        ]
};

gulp.task('style', function () {
  return gulp.src('stylus/site.styl')
    .pipe(stylus())
    .pipe(autoprefixer())
	.pipe(cleanCSS())
    .pipe(gulp.dest('css'));
});

gulp.task('version-number', function () {
  return gulp.src(path, { base: '' })            
    .pipe(version(config))
    .pipe(gulp.dest(''));
});

gulp.task('watch', function () {
	var config = new BuildConfiguration(['stylus/*.styl'], 'css', 'site.css');
    gulp.watch(config.src, ['style']);
});

gulp.task('default', ['version-number', 'style']);
gulp.run('watch');