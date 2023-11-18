const express = require('express')
const router = express.Router();
const userModel = require('../model/userModel')

router.get('/signup', async (req, resp) => {

    resp.render('admin/signUp');
})

router.post('/signup', async (req, resp) => {
    const { name, email, password } = req.body;
    const data = {
        status: 400, // Default to an error status
        message: '' // Initialize the message
    };
    try {
        if (name !== "" && email !== "" && password !== "") {
            let isEmailValid = await checkEmailValidation(email)
            if (isEmailValid) {
                const newUser = await userModel.createUser(name, email, password);
                const data = {
                    status: 201, // Default to an error status
                    message: 'User Created' // Initialize the message
                };
                resp.render('admin/signUp', data);
            } else {
                const data = {
                    status: 400,
                    message: "Email is not Valid"
                }
                resp.render('admin/signUp', data);
            }
        }
        else {
            const data = {
                status: 400,
                message: "All fields are required"
            }
            resp.render('admin/signUp', data);
        }
    }
    catch (error) {
        const data = {
            status: 500,
            message: error.message // Initialize the message
        };
        resp.render('admin/signUp', data);
    }
})

function checkEmailValidation(email) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
        return false;
    }
    return true
}
// route for the signIn
router.get('/signin', async (req, resp) => {
    resp.render('admin/signIn');
})

router.post('/signin', async (req, resp) => {
    const { email, password } = req.body;
    try {
        if (email != "" && password != "") {
            const user = await userModel.signInUser(email, password);
        }
    } catch (error) {
        console.log(error.message);
        const data = {
            status: 500,
            message: error.message
        };
        resp.render('admin/signIn', data);
    }
})

module.exports = router;