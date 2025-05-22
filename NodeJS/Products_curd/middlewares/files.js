const multer = require('multer');

const uploadFile = async (req, res, next) => {
    try {
        // return if file object is not present in request
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded." });
        }
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "server side error" });
    }
};

const uploadFiles = (req, res, next) => {
    try {
        // checks files are uploaded or not
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: "No file uploaded" });
        }
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "server side error" });
    }
};

const uploadMultipleFiles = async (req, res, next) => {
    try {
        // check files object 'uploaded_file1' is present in request object or not
        if (
            !req.files["uploaded_file1"] ||
            req.files["uploaded_file1"].length === 0
        ) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        // check files object 'uploaded_file2' is present in request object or not
        if (
            !req.files["uploaded_file2"] ||
            req.files["uploaded_file2"].length === 0
        ) {
            return res.status(400).json({ message: "No file uploaded" });
        }
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "server side error" });
    }
};

const multerErrorHandling = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    switch (err.code) {
      case 'FILE_TYPE_INVALID':
        return res.status(400).json({ error: 'Only image files are allowed.' });
      case 'LIMIT_FILE_SIZE':
        return res.status(400).json({ error: 'File too large. Max 2MB allowed.' });
      case 'LIMIT_FILE_COUNT':
        return res.status(400).json({ error: 'Too many files uploaded.' });
      case 'LIMIT_UNEXPECTED_FILE':
        return res.status(400).json({ error: 'Unexpected file field or too many files.' });
      default:
        return res.status(400).json({ error: err.message });
    }
  }
  return res.status(500).json({ error: 'Server side error' });
}

module.exports = { uploadFile, uploadFiles, uploadMultipleFiles, multerErrorHandling };
