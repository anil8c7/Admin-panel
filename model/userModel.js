const { Error } = require('sequelize');
const dbConn = require('../db/dbConnection');
const bcrypt = require('bcrypt');



function checkEmailExist(email) {
    return new Promise((resolve, reject) => {
        const query = `SELECT COUNT(*) AS count FROM users WHERE email = ?`
        const value = [email];
        dbConn.query(query, value, (error, result) => {
            if (error) {
                reject(error);
            } else {
                const getemail = result[0].count > 0;
                resolve(getemail)
            }
        })
    })
}
// create user function
async function createUser(name, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
        const values = [name, email, hashedPassword]
        dbConn.query(query, values, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        })
    })
}
 async function signInUser(email) {
            return new Promise((resolve, reject) => {
                const query = 'SELECT password FROM users WHERE email=?';
                const value = [email];
                dbConn.query(query, value, async (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        if (result.length > 0) {
                            resolve(result);
                        } else {
                            reject('User Not found');
                        }
                    }
                });
            });
        } 


module.exports = { createUser, signInUser,checkEmailExist };