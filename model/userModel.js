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

async function createUser(name, email, password) {
    const emailExists  = await checkEmailExist(email);
    if (emailExists) {
        throw new Error('Email is already Exist');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
        const values = [name, email, hashedPassword]
        dbConn.query(query,values,(error,result)=>{
            if(error){
                reject(error);
            }else{
                resolve(result);
            }
        })
    })
}
async function signInUser(email, password){
    const emailExists =  await checkEmailExist(email)
    if(emailExists){
        return new Promise((resolve,reject)=>{
            const query = `SELECT password from users WHERE email=?`;
            const value = [email];
            dbConn.query(query,value,async (err,result)=>{
                if(err){
                    reject(err)
                }else{
                    if(result){
                        const dbpassword = result[0].password;
                        const passwordMatch = await bcrypt.compare(password, dbpassword);
                        if(passwordMatch){
                            resolve(result);
                        }
                        else{
                            throw new Error(`Password is Incorrect`);
                        }
                    }
                }
            });
        })
    }
    else{
        throw new Error('This Email is not Exist');
    }

}
module.exports ={createUser, signInUser};