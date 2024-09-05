const express = require('express');
const router = express.Router();

const { 
    getAlbums
 } = require('./../controllers/album.controller');

// GET route to get all albums along with the artist and no of songs or
// search albums by album or artist name.
router.get('/', getAlbums);

module.exports = router;