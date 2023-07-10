const express = require("express");
const apiController = require("../controllers/apiController");

const router = express.Router()
router.post("/transform-data", apiController.TrandformData);
router.post("/upload-file", apiController.UploadFile);
router.get("/list-file", apiController.ListFile);
router.get("/retrieve-file", apiController.RetrieveFile);
router.get("/delete-file", apiController.DeleteFile);
router.post("/create-fineTune", apiController.CreateFineTune);

module.exports = router;
