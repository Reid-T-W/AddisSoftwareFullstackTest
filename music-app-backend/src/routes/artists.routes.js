const express = require('express');
const router = express.Router();

const { 
    getArtists
 } = require('./../controllers/artist.controller');

// GET route to get all artist and their number of songs and albums or
// search by artist name.
router.get('/', getArtists);

module.exports = router;