const { pool } = require('../config/database.js')

const uploadFileController = async (req, res) => {
    try {
        const result = await insertFiles(req.file);
        console.log(result);
        console.log("Uploaded file:", req.file);
        return res.status(200).json({ message: "Files uploaded Successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "server side error" });
    }
};

const uploadFilesController = async (req, res) => {
    try {
        const files = req.files;
        // apply loop on files object and perform insert operation on each element 
        files.forEach(async file => {
           const result = await insertFiles(file);
             console.log(result);
        });
        console.log("Uploaded files:", req.files);
        return res.status(200).json({ message: "Files uploaded Successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "server side error" });
    }
};

const uploadMultipleFilesController = async (req, res) => {
    try {
        const files = req.files;
        // iterate files object through keys 
        for (const field in files) {
            const fileArray = files[field];
            // apply loop on each array object and perform insert operation
            for (const file of fileArray) {
             const result = await insertFiles(file);
             console.log(result);
            }
        }
        console.log("Uploaded files:", req.files);
        return res.status(200).json({ message: "Files uploaded Successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "server side error" });
    }
};

// function insert file details
const insertFiles = async (file)=>{
    const { fieldname, originalname, mimetype, destination, filename, path, size } = file;
    const fileData = [fieldname, originalname, mimetype, destination, filename, path, size];
    const query = `insert into files (fieldname, originalname, mimetype, destination, filename, path, size) values (?,?,?,?,?,?,?)`;
    const result = await pool.query(query, fileData);
    return result;
}

module.exports = {
    uploadFileController,
    uploadFilesController,
    uploadMultipleFilesController,
};

// database table details
//  id INT AUTO_INCREMENT PRIMARY KEY,
//   fieldname VARCHAR(100) not null,
//   originalname VARCHAR(255) not null,
//   mimetype VARCHAR(100) not null,
//   destination VARCHAR(255) not null,
//   filename VARCHAR(255) not null,
//   path VARCHAR(500) not null,
//   size INT not null,
//   uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

// upload file object
//  {
//       fieldname: 'uploaded_file2',
//       originalname: 'background_check_documents.png',
//       encoding: '7bit',
//       mimetype: 'image/png',
//       destination: 'uploads/',
//       filename: '1747833380586-background_check_documents.png',
//       path: 'uploads\\1747833380586-background_check_documents.png',
//       size: 90103
//     }
