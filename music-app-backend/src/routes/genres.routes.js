const express = require('express');
const router = express.Router();

const { 
    getGenres
 } = require('./../controllers/genre.controller');

// Route to get all albums
router.get('/', getGenres);

module.exports = router;