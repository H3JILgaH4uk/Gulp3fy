module.exports = {
	extends: [
		'stylelint-config-standard-scss',
		'stylelint-config-rational-order',
		'stylelint-prettier/recommended',
	],
	plugins: ['stylelint-scss', 'stylelint-order', 'stylelint-config-rational-order/plugin'],
	rules: {
		// Property Order
		'order/properties-order': [[], { severity: 'warning' }],
		'plugin/rational-order': [
			true,
			{
				'border-in-box-model': false,
				'empty-line-between-groups': false,
				severity: 'warning',
			},
		],

		'plugin/rational-order': [true, { 'empty-line-between-groups': true }],
		'at-rule-no-unknown': null,
		'scss/at-rule-no-unknown': true,
		'declaration-empty-line-before': null,
		'order/properties-order': [],
		indentation: 'tab',
		'no-missing-end-of-source-newline': null,
		'selector-pseudo-element-colon-notation': 'single',
		'block-no-empty': null,
		'function-name-case': null,
		'no-empty-source': null,
		'length-zero-no-unit': null,
		'no-eol-whitespace': null,
		'value-list-max-empty-lines': null,
		'color-hex-case': null,
		'no-descending-specificity': null,
		'scss/dollar-variable-pattern': null,
		'scss/dollar-variable-colon-space-after': null,
		'scss/double-slash-comment-empty-line-before': null,
		'scss/dollar-variable-empty-line-before': null,
		'selector-class-pattern': null,
		'scss/no-global-function-names': null,
		'color-function-notation': null,
		'scss/double-slash-comment-whitespace-inside': null,
		'no-invalid-position-at-import-rule': null,
	},
};
