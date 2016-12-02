'use strict';

var gulp = require('gulp'),
	eslint = require('gulp-eslint');

gulp.task('js-precommit', () => {
	return gulp.src(['src-ui/**/*.js', 'src-server/**/*.js'])
		.pipe(eslint({
			rulePaths: ['']
		}))
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});

gulp.task('copy-hooks', () => {
	gulp.src('git-hooks/**')
		.pipe(gulp.dest('.git/hooks'));
});

gulp.task('init', () => {
	gulp.start('copy-hooks');
});