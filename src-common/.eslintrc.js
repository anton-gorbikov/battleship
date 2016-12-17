module.exports = {
	extends: '../.eslintrc.js',
	env: {
		// Common files should not rely neither on browser or Node.js globals.
		browser: false,
		node: false,
		commonjs: true
	}
};