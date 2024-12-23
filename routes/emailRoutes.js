const express = require('express');
const { contact } = require('../controllers/emailController');

const router = express.Router();

router.post('/contact', contact);

module.exports = router;