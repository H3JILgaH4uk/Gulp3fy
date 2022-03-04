module.exports = {
	extends: ['airbnb-base', 'prettier'],

	env: {
		browser: true,
		es6: true,
		node: true,
		es2021: true,
	},

	rules: {
		'import/no-extraneous-dependencies': [
			'error',
			{ devDependencies: ['gulpfile.js', 'gulp/**/*'] },
		],
		indent: ['error', 'tab'],
		'no-console': 0,
		'eol-last': 0,
		'no-unused-vars': 0,
		'no-trailing-spaces': 0,
		'no-plusplus': 0,
		'implicit-arrow-linebreak': 0,
		'comma-dangle': 0,
		'no-restricted-globals': 0,
		'no-tabs': 0,
		'func-names': 0,
		'spaced-comment': 0,
		'import/extensions': 0,
		'no-undef': 0,
		'arrow-body-style': 0,
		'import/first': 0,
		'no-use-before-define': 0,
		'no-unused-expressions': 0,
		'no-param-reassign': [2, { props: false }],
		'no-nested-ternary': 0,
	},
};
