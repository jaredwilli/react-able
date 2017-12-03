module.exports = {
	env: {
		browser: true,
		es6: true,
		jest: true
	},
	extends: [
        'eslint:recommended',
        'plugin:jsx-a11y/recommended'
    ],
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true
		}
	},
	plugins: [
        'react',
        'jsx-a11y'
    ],
	rules: {
		strict: 0,
		camelcase: 'error',
		indent: [
			'error',
			4,
			{
				SwitchCase: 1
			}
		],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: 1,
		'max-len': [
			'error',
			{
				code: 120,
				ignoreStrings: true,
				ignoreTemplateLiterals: true
			}
		],
		'max-params': ['error', 3],
		'no-console': 'off',
		'no-alert': 'error',
		'no-duplicate-imports': 'error',
		'no-else-return': 'error',
		'no-empty-function': 'error',
		'no-lonely-if': 'error',
		'no-var': 'error',
		'no-tabs': 'error',
		'prefer-const': 'error',
		'prefer-template': 'error',
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'react/default-props-match-prop-types': 'error',
		'react/no-direct-mutation-state': 'error',
		'react/prefer-stateless-function': [
			2,
			{
				ignorePureComponents: true
			}
		],
		'react/prop-types': [2, { ignore: ['children'] }],
		'react/sort-comp': [2],
		'react/jsx-closing-tag-location': 'error',
		'react/jsx-closing-bracket-location': 'error',
		'react/jsx-indent': [2, 4], // first is error, second is number of spaces
		'react/jsx-key': 'error',
		'react/jsx-no-duplicate-props': [2],
		'jsx-a11y/label-has-for': 'off',
		'jsx-a11y/no-static-element-interactions': 'off'
	}
};
