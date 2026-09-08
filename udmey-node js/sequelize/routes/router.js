
const express = require('express');
const { insert, testFunction } = require('../controller/userController');
const { transaction } = require('../controller/transactionController');
const router = express.Router();

// router.get('/register', insert)

router.get('/test', testFunction)
router.get('/add', transaction )

module.exports = router