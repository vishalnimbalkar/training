const multer = require('multer');

// Multer storage config
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/');
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + '-' + file.originalname);
	},
});

const upload = multer({
	storage: storage,
	// Validation for file type
	fileFilter: function (req, file, cb) {
		if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
			return cb(new multer.MulterError('FILE_TYPE_INVALID', 'Only image files are allowed.'));
		}
		cb(null, true);
	},
	// Validation for file size
	limits: {
		fileSize: 2 * 1024 * 1024, // 2 MB max file size
	},
});

// For single file
const singleUpload = upload.single('uploaded_file');

//  Dynamically set array file limit
const dynamicArrayUpload = (fieldName, maxCount) => {
	return upload.array(fieldName, maxCount);
};

// Dynamically set filds files limit
const multiFieldUpload = (fields, maxCount1, maxCount2) => {
	return upload.fields([
		{ name: fields[0], maxCount: maxCount1 },
		{ name: fields[1], maxCount: maxCount2 },
	]);
};

module.exports = { singleUpload, dynamicArrayUpload, multiFieldUpload };
