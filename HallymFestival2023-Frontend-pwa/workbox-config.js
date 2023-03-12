module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.ico'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};