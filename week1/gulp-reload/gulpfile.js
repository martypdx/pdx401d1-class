var gulp = require('gulp');
var bs = require('browser-sync').create();
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');

// watch files for changes and reload
gulp.task('serve', function() {
  bs.init({
    server: {
      baseDir: 'www'
    }
  });

  gulp.watch(['*'], { cwd: 'www' }, bs.reload);
});

gulp.task('bundle', function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: './src/js/index.js',
    debug: true
  });

  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        // .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./www/'));
 
});

gulp.task( 'watch-js', ['bundle'], function() {
  gulp.watch(['./src/js/**'], ['bundle']);
});

gulp.task( 'start', ['watch-js', 'serve']);