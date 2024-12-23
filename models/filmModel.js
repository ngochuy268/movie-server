const db = require('../utils/db');

const getAllFilms = (callback) => {
    const sql = 'SELECT * FROM film';
    db.query(sql, callback);
};

const getStarsByFilmName = (name, callback) => {
    const sql = `
        SELECT p.name, p.avatar
        FROM person p
        LEFT JOIN film_person fp ON p.actorID = fp.actorID
        LEFT JOIN film f ON fp.filmID = f.filmID
        LEFT JOIN role r ON fp.roleid = r.roleid
        WHERE f.name = ? AND r.rolename = 'star';
    `;
    db.query(sql, [name], callback);
};

const getDirectorByFilmName = (name, callback) => {
    const sql = `
        SELECT p.name, p.avatar
        FROM person p
        LEFT JOIN film_person fp ON p.actorID = fp.actorID
        LEFT JOIN film f ON fp.filmID = f.filmID
        LEFT JOIN role r ON fp.roleid = r.roleid
        WHERE f.name = ? AND r.rolename = 'director';
    `;
    db.query(sql, [name], callback);
};

const getWritterByFilmName = (name, callback) => {
    const sql = `
        SELECT p.name, p.avatar
        FROM person p
        LEFT JOIN film_person fp ON p.actorID = fp.actorID
        LEFT JOIN film f ON fp.filmID = f.filmID
        LEFT JOIN role r ON fp.roleid = r.roleid
        WHERE f.name = ? AND r.rolename = 'writter';
    `;
    db.query(sql, [name], callback);
};


module.exports = { getAllFilms, getStarsByFilmName, getDirectorByFilmName, getWritterByFilmName };