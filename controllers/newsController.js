const { getAllNews } = require('../models/newsModel');

const getNews = (req, res) => {
    getAllNews((err, result) => {
        if (err) {
            console.error('Error fetching news:', err);
            return res.status(500).json({ error: 'Error fetching news' });
        }
        res.json(result);
    });
};

module.exports = { getNews };