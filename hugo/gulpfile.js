var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var shell = require('gulp-shell');
var runseq = require('run-sequence');

gulp.task('js', function() {
  gulp.src('src/js/**/*')
    .pipe(gulp.dest('static/js'));
})

gulp.task('hugo-build', shell.task(['hugo']));

gulp.task('minify-html', function() {
  gulp.src(['../**/*.html', '!../hugo/*', '!../hugo/**/*'])
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
      useShortDoctype: true
    }))
    .pipe(gulp.dest('../'));
})

gulp.task('dist', ['hugo-build'], (callback) => {
  runseq('minify-html', callback);
})

gulp.task('default', ['dist']);
