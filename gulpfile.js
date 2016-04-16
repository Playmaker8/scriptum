var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-ruby-sass'),
	concat = require('gulp-concat'),
	livereload = require('gulp-livereload');

gulp.task('default',['styles', 'watch']);

gulp.task('styles', function () {
	return sass('scss/*.scss')
	.on('error', sass.logError)
	.pipe(gulp.dest('css'))
	.pipe(concat('main.css'))
	.pipe(gulp.dest('result_css'))
	.pipe(livereload());
});

gulp.task('watch', function(){
	livereload.listen();
	gulp.watch('scss/*.scss', ['styles'])
});


