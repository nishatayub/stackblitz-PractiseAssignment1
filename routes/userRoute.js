const express = require("express");
const userController = require("../controllers/userController.js");
const router = express.Router();

router.post("/menu", userController.addMenu);
router.get("/menu", userController.getMenu);

module.exports = router;