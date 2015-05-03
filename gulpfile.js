var gulp 	= require('gulp'),
	less 	= require('gulp-less'),
	csso 	= require('gulp-csso'),
	concat 	= require('gulp-concat')
	watch	= require( 'gulp-watch');

var css_source = './stylesheet/strayegg.less';

gulp.task('css', function () {
	return gulp.src( css_source )
		.pipe(less())
		.pipe(csso())
		.pipe(concat('strayegg.css'))
		.pipe(gulp.dest('./stylesheet/'));
});

gulp.task('default', ['css'], function () {
	return;
});

gulp.task('watch',function(){
	gulp.watch( css_source , [ 'css' ] );
});