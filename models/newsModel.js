const db = require('../utils/db');

const getAllNews = (callback) => {
    const sql = 'SELECT * FROM news';
    db.query(sql, callback);
};

module.exports = { getAllNews };