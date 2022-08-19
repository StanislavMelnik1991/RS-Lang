module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb-base',
		'airbnb-typescript/base',
        "next/core-web-vitals"
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json'
	},
  plugins: [
		'@typescript-eslint',
	],
	rules: {
        "import/extensions": [1, {'tsx': "never"}]
	},
};
