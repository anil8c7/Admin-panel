const express = require('express');
const router = express.Router();
const adminRoutes = require('../controllers/adminController');

router.use('/', adminRoutes);

module.exports = router;
