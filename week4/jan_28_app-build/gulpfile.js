const gulp = require( 'gulp' );
const rollup = require( 'rollup-stream' );
const babel = require( 'gulp-babel' );
const source = require( 'vinyl-source-stream' );
const buffer = require( 'vinyl-buffer' );
const clean = require('gulp-clean');
const flatten = require('gulp-flatten');

gulp.task( 'bundle', function() {
	return rollup({ entry: './app/js/app.js' })
		.pipe( source( 'bundle.js' ) )
		.pipe( buffer() )
		.pipe( babel() )
		.pipe( gulp.dest( './server/public/' ) );
});

gulp.task('clean-templates', function(){
	return gulp
		.src( [ './server/public/templates' ] , { read:false } )
		.pipe( clean() );
});

gulp.task( 'move-templates', [ 'clean-templates' ], function() {
	gulp
		.src( './app/components/**/*.html' /*, { base: './' }*/ )
		.pipe( flatten() )
		.pipe( gulp.dest( './server/public/templates' ) );
});

gulp.task( 'watch', [ 'bundle' ], function() {
	gulp.watch( [ './app/js/**/*.js' ], [ 'bundle' ] );
});