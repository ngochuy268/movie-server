const { getAllFilms, getStarsByFilmName, getDirectorByFilmName, getWritterByFilmName } = require('../models/filmModel');

const getFilms = (req, res) => {
    getAllFilms((err, result) => {
        if (err) {
            console.error('Error fetching films:', err);
            return res.status(500).json({ error: 'Error fetching films' });
        }
        res.json(result);
    });
};

const getFilmStars = (req, res) => {
    const filmName = req.params.name.replace(/-/g, ' ');
    getStarsByFilmName(filmName, (err, result) => {
        if (err) {
            console.error('Error fetching stars:', err);
            return res.status(500).json({ error: 'Error fetching stars' });
        }
        res.json(result);
    });
};

const getFilmDirector = (req, res) => {
    const filmName = req.params.name.replace(/-/g, ' ');
    getDirectorByFilmName(filmName, (err, result) => {
        if (err) {
            console.error('Error fetching stars:', err);
            return res.status(500).json({ error: 'Error fetching stars' });
        }
        res.json(result);
    });
};

const getFilmWritter = (req, res) => {
    const filmName = req.params.name.replace(/-/g, ' ');
    getWritterByFilmName(filmName, (err, result) => {
        if (err) {
            console.error('Error fetching stars:', err);
            return res.status(500).json({ error: 'Error fetching stars' });
        }
        res.json(result);
    });
};


module.exports = { getFilms, getFilmStars, getFilmDirector, getFilmWritter };
