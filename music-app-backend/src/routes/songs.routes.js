const express = require('express');
const router = express.Router();
const createSongSchema = require('./../validations/song.validation');
const { validate, duplicateCheck } = require('./../middlewares/validate');
const { createSong, getSongs } = require('./../controllers/song.controller');

// Route to get all songs
router.get('/', getSongs);

// Route to create a song, with validation and duplicate check middlewares
router.post('/', validate(createSongSchema), duplicateCheck, createSong);

module.exports = router;
