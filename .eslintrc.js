module.exports = {
	"env": {
		"browser": true,
		"es6": true
	},
	"extends": "eslint:recommended",
	"parser": "babel-eslint",
	"parserOptions": {
		"ecmaFeatures": {
			"classes": true,
			"jsx": true,
			"experimentalObjectRestSpread": true
		},
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"single"
		],
		"semi": [
			"error",
			"always"
		],
		"no-console": 0,
		"react/display-name": 1
	},
	"globals": {
    "React": true,
    "jest": true,
    "test": true,
    "expect": true,
    "beforeEach": true
  },
};