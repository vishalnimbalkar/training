module.exports = {
	type: 'object',
	properties: {
		product_name: { type: 'string', minLength: 1 },
		product_qnt: { type: 'number', minimum: 1 },
		product_price: { type: 'number' },
	},
	required: ['product_name', 'product_qnt', 'product_price'],
	additionalProperties: false,
};
