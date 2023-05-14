const express = require('express');
const router = express.Router();
const{getUser,login, postData,deleteData}= require('../controller/user');


router.route('/').get(getUser).post(postData);
router.route('/:id').delete(deleteData);
router.route('/login').post(login)
module.exports = router