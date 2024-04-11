module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"overrides": [
		{
			"env": {
				"node": true
			},
			"files": [
				".eslintrc.{js,cjs,jsx}"
			],
			"parserOptions": {
				"sourceType": "script"
			}
		}
	],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"@stylistic/js"
	],
	"rules": {
		// "indent": [
		// "error",
		// "tab"
		// ],
		"@stylistic/js/indent": [ "error", "tab" ],
		"@stylistic/js/array-bracket-spacing": [ "error", "always" ],
		"@stylistic/js/block-spacing": "error",
		"@stylistic/js/arrow-spacing": [ "error", { "before": true, "after": true } ],
		"@stylistic/js/function-call-spacing": [ "error", "always" ],
		"linebreak-style": [
			"error"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		]
	}
};
