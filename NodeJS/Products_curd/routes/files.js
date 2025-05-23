const express = require('express');
const { multerErrorHandling } = require('../middlewares/files');
const { uploadFileController, uploadFilesController, uploadMultipleFilesController } = require('../controllers/files');
const { singleUpload, dynamicArrayUpload, multiFieldUpload } = require('../config/multer');
const router = express.Router();

 router.post('/upload',singleUpload, uploadFileController)
 
 router.post('/uploads/:limit',
  (req, res, next)=>{
    const limit = parseInt(req.params.limit) || 3;
    return dynamicArrayUpload('uploaded_files', limit)(req, res, next);
 }, 
 uploadFilesController) 

router.post('/uploadsMultiple',
  (req, res, next)=>{
    const limit1 = parseInt(req.query.limit1) || 1;
    const limit2 = parseInt(req.query.limit2) || 1;
    return multiFieldUpload(['uploaded_file1', 'uploaded_file2'], limit1, limit2)(req, res, next);
 },
  uploadMultipleFilesController)
 
//  multer error handling middleware
 router.use(multerErrorHandling)

module.exports = router 