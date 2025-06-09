module.exports = {
	type: 'object',
	properties: {
		name: { type: 'string', minLength: 1 },
		email: { type: 'string' },
		password: { type: 'string', minLength: 6, maxLength: 12 },
	},
	required: ['name', 'email', 'password'],
	additionalProperties: false,
};

// {
//   "type": "string",
//   "minLength": 3,
//   "maxLength": 20,
//   "pattern": "^[a-zA-Z]+$",
// }

// {
//   "type": "number",
//   "minimum": 0,
//   "maximum": 100,
//   "exclusiveMinimum": 0,
//   "exclusiveMaximum": 100,
//   "multipleOf": 5
// }

// {
//   "type": "array",
//   "minItems": 1,
//   "maxItems": 5,
//   "uniqueItems": true
// }
