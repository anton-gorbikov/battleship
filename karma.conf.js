'use strict';

module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['browserify', 'jasmine'],
		files: [
			'test-unit/**/*.js'
		],
		exclude: [],
		preprocessors: {
			'test-unit/**/*.js': 'browserify'
		},
		plugins: [
			'karma-browserify'
		],
		reporters: ['progress'],
		port: 9876,
		colors: true,
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['Chrome'],
		singleRun: false,
		concurrency: Infinity
	});
};
