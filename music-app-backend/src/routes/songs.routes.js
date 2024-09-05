const express = require('express');
const router = express.Router();
const { createSongSchema, updateSongSchema } = require('./../validations/song.validation');
const idParamSchema = require('./../validations/params.validation')
const { 
    validateBodySchema, 
    duplicateCheck,
    validateIdParamSchema,
    recordExists
} = require('./../middlewares/validate');
const { 
    createSong, 
    getSongs, 
    getSongDetails,
    updateSong,
    deleteSong,
 } = require('./../controllers/song.controller');

// GET route to get all songs or search songs by title, album, artist, or genre name
router.get('/', getSongs);

// POST route to create a song, with body schema validation and duplicate check middlewares
router.post('/', 
    validateBodySchema(createSongSchema), 
    duplicateCheck, 
    createSong
);

// GET route to get details of a single song with param schema validation middleware
router.get('/:id', 
    validateIdParamSchema(idParamSchema),
    getSongDetails
);

// PUT route to update a song with param and body schema validation middlewares and 
// duplicate check middleware
router.put('/:id', 
    validateBodySchema(updateSongSchema),
    validateIdParamSchema(idParamSchema),
    recordExists,
    duplicateCheck,
    updateSong
);

// DELETE route to delete a song with param schema validation middleware
router.delete('/:id',
    validateIdParamSchema(idParamSchema), 
    recordExists,
    deleteSong
);

module.exports = router;
