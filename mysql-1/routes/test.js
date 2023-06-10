const express = require('express');
const router = express.Router();
const{getTestData}=require('../controller/testController')

router.route('/').get(getTestData)

module.exports = router