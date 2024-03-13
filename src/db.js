const { Pool } = require('pg');

const pool = new Pool({
    user: 'db_user',
    password: 'db_pass',
    host: 'localhost',
    port: 5432,
    database: 'db_name'
});

module.exports = pool;