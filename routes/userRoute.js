const express = require("express");
const userController = require("../controllers/userController.js");
const router = express.Router();

router.post("/menu", userController.addMenu);
router.get("/menu", userController.getMenu);
router.put("/menu/:id", userController.updateMenu);
router.delete("/menu/:id", userController.deleteMenu);

module.exports = router;