var gulp = require('gulp');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');

function BuildConfiguration(filePaths, folderDist, compiledFileName) {
    this.src = filePaths;
    this.dist = folderDist;
    this.fileName = compiledFileName;
    this.completePath = function () {
        return this.dist + this.fileName;
    };
}

gulp.task('style', function () {
  return gulp.src('stylus/site.styl')
    .pipe(stylus())
    .pipe(autoprefixer())
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
	var config = new BuildConfiguration(['stylus/*.styl'], 'css', 'site.css');
    gulp.watch(config.src, ['style']);
});

gulp.task('default', ['style']);
gulp.run('watch');