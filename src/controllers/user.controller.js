const pool = require('../db');

const getAllUsers = async (req, res, next) => {
    try {
        const allUsers = await pool.query('SELECT * FROM users');
        res.json(allUsers.rows);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllUsers,
};