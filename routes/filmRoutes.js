const express = require('express');
const { getFilms, getFilmStars, getFilmDirector, getFilmWritter } = require('../controllers/filmsController');

const router = express.Router();

router.get('/', getFilms);
router.get('/:name/stars', getFilmStars);
router.get('/:name/director', getFilmDirector);
router.get('/:name/writter', getFilmWritter);

module.exports = router;