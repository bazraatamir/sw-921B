const express = require('express');
const {getTodo} =require('../controller/todoController')
const router = express.Router();

router.route('/').get(getTodo)

module.exports = router