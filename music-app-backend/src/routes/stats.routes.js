const express = require('express');
const router = express.Router();
const { getStats } = require('./../controllers/stats.controller');

// Route to get song, artist, album, and genre stats
router.get('/', getStats);

module.exports = router;