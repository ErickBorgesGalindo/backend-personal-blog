const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'Galindo510',
    host: 'localhost',
    port: 5432,
    database: 'blog'
});

module.exports = pool;  