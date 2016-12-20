module.exports = {
	extends: '../.eslintrc.js',
	env: {
		browser: true,
		node: true,
		commonjs: true,
		jasmine: true
	},
	rules: {
		'no-underscore-dangle': 'off' // OK for unit testing.
	}
};