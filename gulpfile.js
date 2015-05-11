var gulp 		= require('gulp'),
	less 		= require('gulp-less'),
	minifyCss 	= require('gulp-minify-css'),
	concat 		= require('gulp-concat'),
	watch		= require('gulp-watch'),
	uncss		= require('gulp-uncss');

gulp.task('css', function () {
	return gulp.src( './stylesheet/_src/strayegg.less' )
		.pipe(less())
		.pipe(uncss({
			html: ['_site/**/*.html']
		}))
		.pipe(minifyCss())
		.pipe(concat('strayegg.css'))
		.pipe(gulp.dest('./stylesheet/'));
});

gulp.task('default', ['css'], function () {
	return;
});

gulp.task('watch',function(){
	gulp.watch( './stylesheet/_src/*.less' , [ 'css' ] );
});