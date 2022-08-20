'use strict'

const express = require("express");
const { upload } = require("../helpers/filehelper");
const { singleFileUpload,getallSingleFiles } = require("../controllers/fileUploaderController");
const router = express.Router();

router.post('/upload', upload.single('file'), singleFileUpload);
router.get('/list', getallSingleFiles);

module.exports = {
    routes: router
}