require('dotenv').config();
module.exports = {
    server:{
        PORT:process.env.PORT || 3001,
        HOST:process.env.HOST || 'localhost',
    },
    database:{
        DB_HOST:process.env.DB_HOST || 'localhost',
        DB_USER:process.env.DB_USER || 'root',
        DB_PASSWORD :process.env.DB_PASSWORD || "",
        DB_NAME:process.env.DB_NAME || 'ejs'
    }
}