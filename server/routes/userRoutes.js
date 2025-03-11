const express = require("express");
const userController = require("../controller/userController");
const router = express.Router();

router.post("/register/user", userController.register);
router.post("/login/user", userController.login);

module.exports = router;
