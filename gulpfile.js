var gulp 	= require('gulp'),
	less 	= require('gulp-less'),
	csso 	= require('gulp-csso'),
	concat 	= require('gulp-concat');

gulp.task('css', function () {
	return gulp.src('./stylesheet/strayegg.less')
		.pipe(less())
		.pipe(csso())
		.pipe(concat('strayegg.css'))
		.pipe(gulp.dest('./stylesheet/'));
});

gulp.task('default', ['css'], function () {
	return;
});