const { pool } = require('../config/database');
/**
 * Function to get all products
 */
const getAllProducts = async (req, res) => {
	try {
		const { page, limit = 10, sortBy, sortOrder } = req.query;

		//calculate offset by using page and limit
		const offset = (page - 1) * limit;

		const allowedSortColumns = ['id', 'product_name', 'product_price', 'product_qnt', 'created_At'];
		const allowedSortOrders = ['asc', 'desc'];

		//validate column if not present in allowed array set default column 'id'
		const validatedSortBy = allowedSortColumns.includes(sortBy) ? sortBy : 'id';

		//validate sort order if not present in allowed array set default order 'asc'
		const validatedSortOrder = allowedSortOrders.includes(sortOrder.toLowerCase()) ? sortOrder.toUpperCase() : 'ASC';

		const query = `select id, product_name, product_price, product_qnt, created_At from products order by ${validatedSortBy} ${validatedSortOrder} limit ? offset ?`;

		const [result] = await pool.query(query, [parseInt(limit), parseInt(offset)]);

		//query to get total count of products
		const [totalCount] = await pool.query(`select count(*) as total from products`);
		console.log(totalCount);

		return res.status(200).json({
			success: true,
			page,
			limit,
			'Total Products': totalCount[0].total,
			'Total Pages': Math.ceil(totalCount[0].total / limit),
			result
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({ success: false, message: 'Server side Error' });
	}
};

const getAllFilteredProducts = async (req, res) => {
	try {
		const { page, limit = 10, sortBy, sortOrder, price } = req.query;
		console.log(price);

		//calculate offset by using page and limit
		const offset = (page - 1) * limit;

		const allowedSortColumns = ['id', 'product_name', 'product_price', 'product_qnt', 'created_At'];
		const allowedSortOrders = ['asc', 'desc'];

		//validate column if not present in allowed array set default column 'id'
		const validatedSortBy = allowedSortColumns.includes(sortBy) ? sortBy : 'id';

		//validate sort order if not present in allowed array set default order 'asc'
		const validatedSortOrder = allowedSortOrders.includes(sortOrder.toLowerCase()) ? sortOrder.toUpperCase() : 'ASC';

		const query = `select id, product_name, product_price, product_qnt, created_At from products where product_price > ? order by ${validatedSortBy} ${validatedSortOrder} limit ? offset ?`;

		const [result] = await pool.query(query, [parseFloat(price), parseInt(limit), parseInt(offset)]);

		//query to get total count of products
		const [totalCount] = await pool.query(`select count(*) as total from products where product_price > ?`, [parseFloat(price)]);

		return res.status(200).json({
			success: true,
			page,
			limit,
			'Total Products': totalCount[0].total,
			'Total Pages': Math.ceil(totalCount[0].total / limit),
			result
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({ success: false, message: 'Server side Error' });
	}
};

/**
 * Function to get product by using id
 */
const getProduct = async (req, res) => {
	try {
		// Access id passed through url
		const id = Number(req.params.product_id);
		//Query to get product details based on product id
		const query = `select id, product_name, product_price, product_qnt from products where id = ?`;
		const [row] = await pool.query(query, id);
		//Check data is available or not
		if (row.length > 0) {
			// Return response 200 ok with product details
			return res.status(200).json(row[0]);
		} else {
			// Return 404 not found if data is not fetched
			return res.status(404).json({ message: 'Product not found' });
		}
	} catch (error) {
		return res.status(500).json({ success: false, message: error.message });
	}
};

/**
 * Function to add new product
 */
const addProduct = async (req, res) => {
	try {
		//Access data from request body and store in variable
		const { product_name, product_qnt, product_price } = req.body;
		const data = [product_name, product_qnt, product_price];
		//Query to insert product
		const query = `insert into products (product_name, product_qnt, product_price) values (?,?,?)`;
		await pool.query(query, data);
		// Return response 200 ok when data added successfully
		return res.status(201).json({ message: 'Product added successfully' });
	} catch (error) {
		return res.status(500).json({ success: false, message: error.message });
	}
};

/**
 * Function to update product details
 */
const updateProduct = async (req, res) => {
	try {
		//Access product id from url and convert it into number
		const id = Number(req.params.product_id);
		if (Number.isNaN(id)) {
			return res.status(400).json({ message: 'Invalid product id' });
		}
		//Access product details from request body
		const { product_name, product_qnt, product_price } = req.body;

		// Map of fields to be updated
		const fields = { product_name, product_qnt, product_price };

		const values = [];
		const updates = [];

		// Dynamically build query parts for non-undefined fields
		for (const [key, value] of Object.entries(fields)) {
			if (value !== undefined) {
				updates.push(`${key} = ?`);
				values.push(value);
			}
		}

		// If no valid fields to update
		if (updates.length === 0) {
			return res.status(400).json({ message: 'No valid fields provided for update.' });
		}

		// Push product id at the end to update spicified product
		values.push(id);

		//Query to update product
		const query = `update products set ${updates.join(', ')} where id = ?`;
		const [result] = await pool.query(query, values);

		//If no product is found then send response 404 not found
		if (result.affectedRows === 0) {
			return res.status(404).json({ message: 'Product not found.' });
		}
		return res.status(200).json({ message: 'product updated successfully' });
	} catch (error) {
		return res.status(500).json({ success: false, message: error.message });
	}
};

/**
 * Function to delete product by id
 */
const deleteProduct = async (req, res) => {
	try {
		//Access product id from url
		const id = Number(req.params.product_id);
		//Query to delete product based on id
		const query = `delete from products where id = ?`;
		const result = await pool.query(query, id);
		if (result.affectedRows === 0) {
			// Return 404 not found if id is not present
			return res.status(404).json({ message: 'Product not found.' });
		}
		return res.status(200).json({ message: 'Product deleted successfully' });
	} catch (error) {
		return res.status(500).json({ success: false, message: error.message });
	}
};

/**
 * Function to replace all details of product
 */
const replaceProduct = async (req, res) => {
	try {
		//Access product id from url
		const id = Number(req.params.product_id);
		//Access product details from request body
		const { product_name, product_qnt, product_price } = req.body;

		//Return 400 bad request if any of the product detail is undefined
		if (product_name === undefined || product_price === undefined || product_qnt === undefined) {
			return res.status(400).json({ message: 'All fields are required' });
		}

		//Values array of product details
		const values = [product_name, product_price, product_qnt, id];
		//Query to update product details
		const query = `update products set product_name = ?, product_price = ?, product_qnt = ? where id = ?`;
		const [result] = await pool.query(query, values);

		if (result.affectedRows === 0) {
			//Return 404 not found if product id is not present
			return res.status(404).json({ message: 'Product not found.' });
		}
		return res.status(200).json({ message: 'product updated successfully' });
	} catch (error) {
		return res.status(500).json({ success: false, message: error.message });
	}
};

module.exports = {
	getAllProducts,
	getAllFilteredProducts,
	addProduct,
	getProduct,
	updateProduct,
	deleteProduct,
	replaceProduct,
};
