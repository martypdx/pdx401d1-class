const gulp = require('gulp');
const babel = require('gulp-babel');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
 
gulp.task('build', () => {
	return gulp.src( 'app/**/*.js' )
		.pipe( babel() )
		.pipe( gulp.dest( 'server/public/' ) );
});

gulp.task('bundle', function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: './app/js/index.js',
    debug: true // compare to process.env.NODE_ENV
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