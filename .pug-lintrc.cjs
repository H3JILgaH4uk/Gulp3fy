module.exports = {
	disallowDuplicateAttributes: true,
	disallowLegacyMixinCall: true,
	disallowSpacesInsideAttributeBrackets: true,
	disallowSpecificTags: ['b', 'i'],
	disallowTrailingSpaces: true,
	requireLowerCaseAttributes: true,
	requireLowerCaseTags: true,
	requireSpaceAfterCodeOperator: true,
	requireSpecificAttributes: [{ img: ['src', 'alt'] }],
	requireStrictEqualityOperators: true,
	validateAttributeSeparator: { separator: ', ', multiLineSeparator: ',\n ' },
	validateDivTags: true,
	validateExtensions: true,
	validateTemplateString: ['variable', 'concatenation'],
};
