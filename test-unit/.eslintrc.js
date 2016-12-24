module.exports = {
	extends: '../.eslintrc.js',
	env: {
		browser: true,
		node: true,
		commonjs: true,
		jasmine: true
	},
	rules: {
		'no-underscore-dangle': 'off', // OK for unit testing.
		'no-magic-numbers': 'off', // It's ok to have magic numbers in stub data declarations.
		'max-nested-callbacks': ['error', 5] // It's ok, because of test structure in Jasmine.
	}
};