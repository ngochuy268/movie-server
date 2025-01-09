const mysql = require('mysql');

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    connectionLimit: 5,
    waitForConnections: true,
    ssl: {
        rejectUnauthorized: false
    }

    // host: 'localhost',
    // user: 'root',
    // password: '',
    // database: 'movie',
});

db.getConnection((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

module.exports = db;