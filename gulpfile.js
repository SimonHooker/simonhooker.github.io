var gulp 	= require('gulp'),
	less 	= require('gulp-less'),
	csso 	= require('gulp-csso'),
	concat 	= require('gulp-concat')
	watch	= require( 'gulp-watch');

gulp.task('css', function () {
	return gulp.src( './stylesheet/_src/strayegg.less' )
		.pipe(less())
		.pipe(csso())
		.pipe(concat('strayegg.css'))
		.pipe(gulp.dest('./stylesheet/'));
});

gulp.task('default', ['css'], function () {
	return;
});

gulp.task('watch',function(){
	gulp.watch( './stylesheet/_src/*.less' , [ 'css' ] );
});