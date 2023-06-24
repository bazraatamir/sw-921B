const express = require("express");
const router = express.Router();
const { register, Login, test } = require("../controller/userConttroller");
router.route("/").post(register);
router.route("/login").post(Login);

module.exports = router;
