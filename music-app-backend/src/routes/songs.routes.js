const express = require('express');
const router = express.Router();
const { createSongSchema, updateSongSchema } = require('./../validations/song.validation');
const idParamSchema = require('./../validations/params.validation')
const { 
    validateBodySchema, 
    duplicateCheck,
    validateIdParamSchema 
} = require('./../middlewares/validate');
const { 
    createSong, 
    getSongs, 
    getSongDetails,
    updateSong,
    deleteSong
 } = require('./../controllers/song.controller');

// Route to get all songs
router.get('/', getSongs);

// Route to create a song, with body schema validation and duplicate check middlewares
router.post('/', 
    validateBodySchema(createSongSchema), 
    duplicateCheck, 
    createSong
);

// Route to get details of a single song with param schema validation middleware
router.get('/:id', 
    validateIdParamSchema(idParamSchema),
    getSongDetails
);

// Route to update a song with param and body schema validation middlewares and 
// duplicate check middleware
router.put('/:id', 
    validateBodySchema(updateSongSchema),
    validateIdParamSchema(idParamSchema),
    duplicateCheck,
    updateSong
);

// Route to delete a song with param schema validation middleware
router.delete('/:id',
    validateIdParamSchema(idParamSchema), 
    deleteSong
);

module.exports = router;
