const { pool } = require("../config/database");
// use fields instead of * - done
// function is always return - done
// add comments
//optimize update function
// get top five records
// filter records
// count records
// check purpose of all apis

/**
 * function to get all products
 */
const getAllProducts = async (req, res) => {
  try {
    // Query to get all products list
    const [result] = await pool.query(
      `select id, product_name, product_price, product_qnt, created_At from products`
    );
    // return response 200 ok with result
    return res.status(200).json(result);
  } catch (error) {
     // Return 500 error if something goes wrong
    return res.status(500).json({ message: "Failed to get Products" });
  }
};

/**
 * function to get product by using id 
 */
const getProduct = async (req, res) => {
  try {
    // access id passed through url
    const id = Number(req.params.product_id);
    //Query to get product details based on product id
    const query = `select id, product_name, product_price, product_qnt from products where id = ?`;
    const [row] = await pool.query(query, id);
    //check data is available or not 
    if (row.length > 0) {
      // return response 200 ok with product details
      return res.status(200).json(row[0]);
    } else {
      // return 404 not found if data is not fetched
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
     // Return 500 error if something goes wrong
    return res.status(500).json({ message: "Failed" });
  }
};

/**
 * function to add new product 
 */
const addProduct = async (req, res) => {
  try {
    //access data from request body and store in variable
    const data = [
      req.body.product_name,
      req.body.product_qnt,
      req.body.product_price,
    ];
    //Query to insert product 
    const query = `insert into products (product_name, product_qnt, product_price) values (?,?,?)`;
    const result = await pool.query(query, data);
    // return response 200 ok when data added successfully
    return res.status(200).json({ message: "Product added successfully" });
  } catch (error) {
     // Return 500 error if something goes wrong
    return res.status(500).json({ message: "Failed to add product" });
  }
};

/**
 * function to update product details
 */
const updateProduct = async (req, res) => {
  try {
    //access product id from url and convert it into number
    const id = Number(req.params.product_id);
    if(Number.isNaN(id)){
      return res.status(400).json({message : "Invalid product id"})
    }
    //access product details from request body
    const { product_name, product_qnt, product_price } = req.body;
  
    // Map of fields to be updated
    const fields = {
      product_name,
      product_qnt,
      product_price,
    };

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
      return res.status(400).json({ message: "No valid fields provided for update." });
    }
    
    // push product id at the end to update spicified product
    values.push(id);

    //Query to update product
    const query = `update products set ${updates.join(", ")} where id = ?`;
    const [result] = await pool.query(query, values);

    //if no product is found then send response 404 not found
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Product not found." });
    }
    // return response 200 ok when product is updated successfully
    return res.status(200).json({ message: "product updated successfully" });
  } catch (error) {
     // Return 500 error if something goes wrong
    return res.status(500).json({ message: "Failed to update product" });
  }
};

/**
 * function to delete product by id
 */
const deleteProduct = async (req, res) => {
  try {
    //access product id from url
    const id = Number(req.params.product_id);
    //Query to delete product based on id
    const query = `delete from products where id = ?`;
    const result = await pool.query(query, id);
    if (result.affectedRows === 0) {
      // return 404 not found if id is not present
      return res.status(404).json({ message: "Product not found." });
    }
    //return 200 ok if product id deleted successfully
    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
     // Return 500 error if something goes wrong
    return res.status(500).json({ message: "Failed to delete product" });
  }
};

/**
 * function to replace all details of product
 */
const replaceProduct = async (req, res) => {
  try {
    //access product id from url
    const id = Number(req.params.product_id);
    //access product details from request body
    const { product_name, product_qnt, product_price } = req.body;

    //return 400 bad request if any of the product detail is undefined
    if (
      product_name === undefined ||
      product_price === undefined ||
      product_qnt === undefined
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    //values array of product details
    const values = [product_name, product_price, product_qnt, id];
    //Query to update product details
    const query = `update products set product_name = ?, product_price = ?, product_qnt = ? where id = ?`;
    const [result] = await pool.query(query, values);

    if (result.affectedRows === 0) {
      //return 404 not found if product id is not present
      return res.status(404).json({ message: "Product not found." });
    }
    //return 200 ok when product updated successfully
    return res.status(200).json({ message: "product updated successfully" });
  } catch (error) {
     // Return 500 error if something goes wrong
    return res.status(500).json({ message: "Failed to update product" });
  }
};

module.exports = {
  getAllProducts,
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  replaceProduct,
};
