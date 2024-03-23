const { jsonwt } = require('../config');
const jwt = require('jsonwebtoken');
const pool = require('../db');

const getAllArticles = async (req, res, next) => {
    try {
        const allArticles = await pool.query('SELECT * FROM articles');
        res.json(allArticles.rows);
    } catch (error) {
        next(error);
    }
};

const getAllWriters = async (req, res, next) => {
    try {
        const allWriters = await pool.query('SELECT * FROM writers');
        res.json(allWriters.rows);
    } catch (error) {
        next(error);
    }
};


module.exports = {
    getAllArticles,
    getAllWriters,
}



// const authorization = req.get('authorization');
// let token = null;
// if (authorization && authorization.toLowerCase().startsWith('bearer')){
//     token = authorization.substring(7);
// }

// const decodedToken = jwt.verify(token, jsonwt.JWT_SECRET)

// console.log(decodedToken);
// if(!token || !decodedToken.id_user) {
//     return res.status(401).json({error: 'token missing or invalid'});
// }