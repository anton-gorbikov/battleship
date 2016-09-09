module.exports = {
	extends: 'eslint:recommended',
	rules: {
		// Possible Errors section.
		'no-extra-parens': 'all',
		'no-unsafe-negation': true,
		'valid-jsdoc': true,

		// Best Practices section.
		'array-callback-return': true,
		'block-scoped-var': true,
		'class-methods-use-this': true,
		'complexity': ['error', 5],
		'consistent-return': true,
		'curly': true,
		'default-case': true,
		'dot-location': 'property',
		// TODO: dot-notation
		'eqeqeq': true,
		'guard-for-in': true,
		'no-alert': true,
		'no-caller': true,
		'no-else-return': true,
		'no-empty-function': true,
		'no-eq-null': true,
		'no-eval': true,
		'no-extend-native': true,
		'no-extra-bind': true,
		'no-extra-label': true,
		'no-floating-decimal': true,
		'no-global-assign': true,
		// OK: no-implicit-coercion
		'no-implicit-globals': true,
		'no-implied-eval': true,
		'no-invalid-this': true,
		'no-iterator': true,
		'no-labels': true,
		'no-lone-blocks': true,
		'no-loop-func': true,
		'no-magic-numbers': true,
		'no-multi-spaces': true,
		'no-multi-str': true,
		'no-new-func': true,
		'no-new-wrappers': true,
		'no-new': true,
		'no-octal-escape': true,
		'no-param-reassign': true,
		'no-proto': true,
		'no-return-assign': true,
		'no-script-url': true,
		'no-self-compare': true,
		'no-sequences': true,
		'no-throw-literal': true,
		'no-unmodified-loop-condition': true,
		'no-unused-expressions': true,
		'no-useless-call': true,
		'no-useless-concat': true,
		'no-useless-escape': true,
		'no-void': true,
		// TODO: no-warning-comments
		'no-with': true,
		'radix': true,
		'vars-on-top': true,
		'wrap-iife': 'inside',
		'yoda': 'never',

		// Strict Mode section.
		'strict': 'safe',

		// Variables section.
		'init-declarations': 'always',
		'no-catch-shadow': true,
		'no-label-var': true,
		// OK: no-restricted-globals
		'no-shadow-restricted-names': true,
		// OK: no-shadow
		'no-undef-init': true,
		'no-undefined': true,
		'no-use-before-define': true,

		// Node.js and CommonJS section.
		'callback-return': true,
		'global-require': true,
		'handle-callback-err': true,
		'no-mixed-requires': true,
		'no-new-require': true,
		'no-path-concat': true,
		'no-process-env': true,
		'no-process-exit': true,
		// OK: no-restricted-modules
		'no-sync': true,

		// Stylistic Issues section.
		'array-bracket-spacing': 'never',
		'block-spacing': 'always',
		'brace-style': '1tbs',
		'camelcase': 'always',
		'comma-dangle': 'never',
		'comma-spacing': { 'before': false, 'after': true },
		'comma-style': 'last',
		'computed-property-spacing': 'never',
		'consistent-this': 'that',
		'eol-last': true,
		'func-call-spacing': 'never',
		'func-names': 'never',
		'func-style': 'declaration',
		// TODO: id-blacklist
		// TODO: id-length
		// TODO: id-match
		'indent': 'tab',
		// OK: jsx-quotes
		'key-spacing': { 'beforeColon': false, 'afterColon': true, 'mode': 'strict' },
		'keyword-spacing': { 'before': true, 'after': true },
		'linebreak-style': 'windows',
		'lines-around-comment': { 'beforeBlockComment': true },
		'max-depth': 4,
		'max-len': 80,
		// OK: max-lines
		'max-nested-callbacks': 3,
		'max-params': 5,
		'max-statements-per-line': 1,
		'max-statements': 10,
		'multiline-ternary': 'never',
		'new-cap': true,
		'new-parens': true,
		'newline-after-var': true,
		'newline-before-return': true,
		'newline-per-chained-call': true,
		'no-array-constructor': true,
		'no-bitwise': true,
		'no-continue': true,
		'no-inline-comments': true,
		'no-lonely-if': true,
		'no-mixed-operators': true,
		'no-multiple-empty-lines': true,
		// OK: no-negated-condition
		'no-nested-ternary': true,
		'no-new-object': true,
		// OK: no-plusplus
		// OK: no-restricted-syntax
		// OK: no-tabs
		// OK: no-ternary
		'no-trailing-spaces': true,
		'no-underscore-dangle': { 'allowAfterThis': true },
		'no-unneeded-ternary': true,
		'no-whitespace-before-property': true,
		'object-curly-newline': { 'minProperties': 3 },
		'object-curly-spacing': 'always',
		// OK: object-property-newline
		'one-var-declaration-per-line': 'initializations',
		'one-var': 'always',
		'operator-assignment': 'always',
		'operator-linebreak': 'after',
		'padded-blocks': 'never',
		'quote-props': 'as-needed',
		'quotes': 'single',
		// OK: require-jsdoc
		'semi-spacing': { 'before': false, 'after': true },
		'semi': 'always',
		// OK: sort-keys
		// OK: sort-vars
		'space-before-blocks': true,
		'space-before-function-paren': 'never',
		'space-in-parens': 'never',
		// OK: space-infix-ops
		'space-unary-ops': { 'words': true, 'nonwords': false },
		'spaced-comment': 'always',
		'unicode-bom': 'never',
		// OK: wrap-regex

		// ECMAScript 6 section.
		'arrow-body-style': 'as-needed',
		'arrow-parens': 'as-needed',
		'arrow-spacing': { 'before': true, 'after': true },
		'generator-star-spacing': { 'before': false, 'after': true },
		// OK: no-confusing-arrow
		'no-duplicate-imports': true,
		// OK: no-restricted-imports
		'no-useless-computed-key': true,
		'no-useless-constructor': true,
		'no-useless-rename': true,
		// OK: no-var
		// OK: object-shorthand
		// OK: prefer-arrow-callback
		// OK: prefer-const
		'prefer-reflect': true,
		'prefer-rest-params': true,
		'prefer-spread': true,
		'prefer-template': true,
		'rest-spread-spacing': 'never',
		// OK: sort-imports
		'symbol-description': true,
		'template-curly-spacing': 'never',
		'yield-star-spacing': { 'before': false, 'after': true }
	}
};