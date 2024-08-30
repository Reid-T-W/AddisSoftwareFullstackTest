const express = require('express');
const router = express.Router();
const createSongSchema = require('./../validations/song.validation');
const validate = require('./../middlewares/validate');
const { createSong, getSongs } = require('./../controllers/song.controller');

// Route to get all songs
router.get('/', getSongs);

// Route to create a song, with validation middleware
router.post('/', validate(createSongSchema), createSong);

module.exports = router;
