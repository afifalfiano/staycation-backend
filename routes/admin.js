var express = require('express');
var router = express.Router();
const adminController = require('../controller/adminController');

/* GET home page. */
router.get('/dashboard', adminController.viewDashboard);
router.get('/category', adminController.viewCategory);
router.get('/bank', adminController.viewBank);
router.get('/item', adminController.viewItem);
router.get('/booking', adminController.viewBooking);

module.exports = router;
