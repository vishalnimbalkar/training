const { pool } = require('../config/database.js');

const uploadFileController = async (req, res) => {
	try {
		// Return 400 if file object is not present in request
		if (!req.file) {
			return res.status(400).json({ success: false, error: 'No File Uploaded.' });
		}
		const result = await insertFiles(req.file);
		console.log(result);
		console.log('Uploaded file:', req.file);
		return res.status(200).json({ success: true, message: 'Files Uploaded Successfully!' });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ success: false, error: 'Server Side Error' });
	}
};

const uploadFilesController = async (req, res) => {
	try {
		// Return 400 if file object is not present in request
		if (!req.files || req.files.length === 0) {
			return res.status(400).json({ success: false, error: 'No File Uploaded.' });
		}
		const files = req.files;
		// Apply loop on files object and perform insert operation on each file object
		files.forEach(async (file) => {
			const result = await insertFiles(file);
			console.log(result);
		});
		return res.status(200).json({ success: true, message: 'Files Uploaded Successfully!' });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ success: false, error: 'Server Side Error' });
	}
};

const uploadMultipleFilesController = async (req, res) => {
	try {
		// Check files object 'uploaded_file1' is present in request object or not
		if (!req.files['uploaded_file1'] || req.files['uploaded_file1'].length === 0) {
			return res.status(400).json({ success: false, error: 'No File Uploaded.' });
		}

		// Check files object 'uploaded_file2' is present in request object or not
		if (!req.files['uploaded_file2'] || req.files['uploaded_file2'].length === 0) {
			return res.status(400).json({ success: false, error: 'No File Uploaded.d' });
		}
		const files = req.files;
		// Iterate files object through keys
		for (const field in files) {
			const fileArray = files[field];
			// Apply loop on each array object and perform insert operation
			for (const file of fileArray) {
				const result = await insertFiles(file);
				console.log(result);
			}
		}
		return res.status(200).json({ success: true, message: 'Files Uploaded Successfully!' });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ success: false, error: 'Server Side Error' });
	}
};

// Function insert file details
const insertFiles = async (file) => {
	const { fieldname, originalname, mimetype, destination, filename, path, size } = file;
	const fileData = [fieldname, originalname, mimetype, destination, filename, path, size];
	const query = `insert into files (fieldname, originalname, mimetype, destination, filename, path, size) values (?,?,?,?,?,?,?)`;
	const result = await pool.query(query, fileData);
	return result;
};

module.exports = { uploadFileController, uploadFilesController, uploadMultipleFilesController };
