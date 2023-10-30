const express = require('express');
const router = express.Router();
const adminRoutes = require('../controllers/adminController');

router.use('/admin', adminRoutes);

module.exports = router;
