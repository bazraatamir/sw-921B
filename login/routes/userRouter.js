const express = require("express");
const router = express.Router();
const { createUser, login } = require("../controller/userController");
router.route("/").post(createUser);
router.route("/login").post(login);

module.exports = router;
