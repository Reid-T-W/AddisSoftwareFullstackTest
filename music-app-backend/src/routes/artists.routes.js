const express = require('express');
const router = express.Router();

const { 
    getArtists
 } = require('./../controllers/artist.controller');

// Route to get all artist and their number of songs and albums
router.get('/', getArtists);

module.exports = router;