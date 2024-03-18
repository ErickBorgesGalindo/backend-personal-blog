const { config } = require('dotenv');
config()

module.exports = {
    db:{
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
    },
    jsonwt:{
        JWT_SECRET : process.env.JWT_SECRET,
    }
}