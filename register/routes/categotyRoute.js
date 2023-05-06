const express = require('express');
const router = express.Router();

const {getCategory,getCategories,createCategory}= require("../controller/categoryController")
router.route('/').get(getCategories).post(createCategory)
router.route('/:id').get(getCategory)

module.exports = router