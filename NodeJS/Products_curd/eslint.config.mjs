import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
	{ ignores: ['node_modules/', 'package-lock.json', '.env', 'templates/'] },
	{ files: ['**/*.{js,mjs,cjs}'], plugins: { js }, extends: ['js/recommended'] },
	{ files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
	{ files: ['**/*.{js,mjs,cjs}'], languageOptions: { globals: globals.node } },
	{
		// Ignores: ["**/*.js"],
		rules: {
			semi: 'warn',
			'no-unused-vars': 1,
			'quotes': ['error', 'single', { allowTemplateLiterals: true }],
			'arrow-body-style': ['error', 'always'],
			// 'capitalized-comments': 'warn',
			'eqeqeq': 'error', // == to === and != to !===
			// 'no-console': 'warn',
			// 'consistent-return': 'error',
			'no-var': 'error',
			'prefer-const': 'error',

			//for camel case using id-match
			// 'id-match': ['warn', '^[a-z]+([A-Z][a-z]+)*$', {
			// 	properties: false, // allow to check object properties
			// 	onlyDeclarations: true, // rule only apply on declaration of variable, function
			// 	ignoreDestructuring: false, // checks destructured variables when false
			// },]

			// 'camelcase': ['error', {
			// 	properties: 'always',         // Enforce camelCase for object properties
			// 	ignoreDestructuring: false,  // Enforce for destructured variables too
			// 	ignoreImports: false,        // Enforce for import aliases
			// 	ignoreGlobals: false         // Enforce for global variable names
			// }]
		},
	},
]);

// Off - 0
// Warn - 1
// Error - 2
// Add file in ignores
// Imp rules
// Add rule to capitilize variable(snake case, camel case)
// ^[a-z]+(_[a-z0-9]+)*$ - snake case pattern
// ^[a-z]+([A-Z][a-z]+)*$ - camel case pattern