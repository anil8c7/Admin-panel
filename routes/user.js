const express = require('express');
const router = express.Router();
const userRoutes = require('../controllers/userController');
router.use('/', userRoutes);
module.exports = router;
