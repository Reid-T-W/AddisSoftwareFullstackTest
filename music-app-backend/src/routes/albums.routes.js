const express = require('express');
const router = express.Router();

const { 
    getAlbums
 } = require('./../controllers/album.controller');

// Route to get all albums along with the atrist and no of songs
router.get('/', getAlbums);

module.exports = router;