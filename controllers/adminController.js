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
    console.log("ddd"+name)    
    console.log(email)    
    console.log(password)    
    try {
        if(name!=="" && email !=="" && password!==""){
            const newUser = await userModel.createUser(name, email, password);
            const data = {
                status: 400, // Default to an error status
                message: 'User Created' // Initialize the message
            };
           resp.render('admin/signUp',data);
        }
      else{
        const data = {
            status:400,
            message:"All fields are required"
        }
        resp.render('admin/signUp',data);
      }    
    }
    catch (error) {
        const data = {
            status: 500, 
            message: error.message // Initialize the message
        };    
        resp.render('admin/signUp',data);
    }

})

module.exports = router;