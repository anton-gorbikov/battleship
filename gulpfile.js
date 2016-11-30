'use strict';

var gulp = require('gulp'),
	eslint = require('gulp-eslint');

gulp.task('js-precommit', ['js-precommit-server', 'js-precommit-client']);

gulp.task('js-precommit-client', () => {
	return gulp.src(['src-ui/**/*.js'])
		.pipe(eslint({
			rulePaths: [''],
			envs: ['browser']
		}))
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});

gulp.task('js-precommit-server', () => {
	return gulp.src(['src-server/**/*.js'])
		.pipe(eslint({
			rulePaths: [''],
			envs: ['node'],
			rules: {
				'no-console': 'off'
			}
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