const express = require('express');
const router = express.Router();

const { 
    getGenres
 } = require('./../controllers/genre.controller');

// GET route to get all genres or search by 
// genre name
router.get('/', getGenres);

module.exports = router;