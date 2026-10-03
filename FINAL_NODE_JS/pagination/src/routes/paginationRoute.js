const express = require('express');
const { 
    offsetPagination, 
    keysetPagination, 
    cursorPagination, 
    timeWindowPagination 
} = require('../controllers/paginationController');

const router = express.Router();

router.get('/offset', offsetPagination);
router.get('/keyset', keysetPagination);
router.get('/cursor', cursorPagination);
router.get('/timewindow', timeWindowPagination);

module.exports = router;