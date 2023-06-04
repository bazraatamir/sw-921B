const express = require('express');
const router = express.Router();
const {getUserData, postData} = require('../controller/userController')

router.route('/').get(getUserData).post(postData)

module.exports = router