const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('users/dashboard'); 
});
router.get('/apps', async (req, res) => {
    res.render('users/apps'); 
});
module.exports = router;   
