const express = require('express')
const router = express.Router();
const userModel = require('../model/userModel')
router.get('/signin', async (req, resp) => {

    resp.render('admin/signIn');
})
router.get('/signup', async (req, resp) => {
   
    resp.render('admin/signUp');
})
router.post('/signin', async (req, resp) => {

})
router.post('/signup', async (req, resp) => {
    const { name, email, password } = req.body;
    const data = {
        status: 400, // Default to an error status
        message: '' // Initialize the message
    };    
    try {
        const newUser = await userModel.createUser(name, email, password);
         data.status  = 201
        data.message='User Created'
        
    }
    catch (error) {
        data.message= error.message
    }
    resp.render('admin/signUp',data);

})

module.exports = router;