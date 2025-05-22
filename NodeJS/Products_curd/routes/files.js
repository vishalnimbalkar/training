const express = require('express');

const { uploadFile, uploadFiles, uploadMultipleFiles, multerErrorHandling } = require('../middlewares/files');
const { uploadFileController, uploadFilesController, uploadMultipleFilesController } = require('../controllers/files');
const { singleUpload, dynamicArrayUpload, multiFieldUpload } = require('../config/multer');
const router = express.Router();

// can we config multer.diskStorage and serverStorage at one multer instance  - No, we have to create separate instance for each storage
// second parameter for array is required or not - not required if we not provide no limit set on file uploads
// pass limit value dynamically
// if errors occurs in validation then previous files are uploaded or not - not uploaded
// can we scan files using multer - no we can use third party scanners

 router.post('/upload',singleUpload, uploadFile, uploadFileController)
 
 router.post('/uploads/:limit',
  (req, res, next)=>{
    const limit = parseInt(req.params.limit) || 3;
    return dynamicArrayUpload('uploaded_files', limit)(req, res, next);
 }, 
 uploadFiles, uploadFilesController) 
 
//  router.post('/uploadsMultiple',upload.fields([{name : 'uploaded_file1', maxCount: 1}, {name : 'uploaded_file2', maxCount: 4}]), uploadMultipleFiles, uploadMultipleFilesController) 

router.post('/uploadsMultiple',
  (req, res, next)=>{
    const limit1 = parseInt(req.query.limit1) || 1;
    const limit2 = parseInt(req.query.limit2) || 1;
    return multiFieldUpload(['uploaded_file1', 'uploaded_file2'], limit1, limit2)(req, res, next);
 },
 uploadMultipleFiles, uploadMultipleFilesController)
 
//  multer error handling middleware
 router.use(multerErrorHandling)

module.exports = router 