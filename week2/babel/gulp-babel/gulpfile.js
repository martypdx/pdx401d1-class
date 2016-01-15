const gulp = require('gulp');
const babel = require('gulp-babel');
const mocha = require('gulp-mocha');

require('babel-core/register');

 
gulp.task('test', function () {
	return gulp.src( 'test/**/*.js', { read: false } )
		.pipe(mocha({
			reporter: 'nyan',
			compilers: [
				'js:babel-core/register',
			]
		}));
});
 
gulp.task('build', () => {
	return gulp.src('src/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('dist'));
});