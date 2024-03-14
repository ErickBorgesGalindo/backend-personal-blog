const { Pool } = require('pg');

const pool = new Pool({
    user: 'user_name',
    password: 'pass',
    host: 'localhost',
    port: 5432,
    database: 'data_name'
});

module.exports = pool;  