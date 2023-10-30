const mysql = require('mysql');
const config  = require('../config/config');

const dbConn = mysql.createConnection({
    host:config.database.DB_HOST,
    user:config.database.DB_USER,
    password:config.database.DB_PASSWORD,
    database:config.database.DB_NAME
})
dbConn.connect((err)=>{
    if(err){
        console.log(`Connection is not established due to : ${err}`);
    }
    console.log(`Connection established`);
})
module.exports = dbConn;