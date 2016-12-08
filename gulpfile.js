'use strict';

let gulp = require('gulp');
let eslint = require('gulp-eslint');
let browserify = require('browserify');
let source = require('vinyl-source-stream');

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

gulp.task('browserify', () => {
	return browserify('./src-ui/javascript/main.js')
		.bundle()
		.pipe(source('main.js'))
		.pipe(gulp.dest('./dist/src-ui/javascript'));
});

gulp.task('copy-server', () => {
	gulp.src('src-server/**')
		.pipe(gulp.dest('dist/src-server'));
});

gulp.task('copy-ui', () => {
	gulp.src(['src-ui/*.css', 'src-ui/*.html'])
		.pipe(gulp.dest('dist/src-ui'));
});

gulp.task('build', ['browserify', 'copy-ui', 'copy-server']);
