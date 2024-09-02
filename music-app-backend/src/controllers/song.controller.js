/**
 * @fileoverview Song Controller handles all song-related operations.
 * This file defines controllers for song creation, getting list of songs,
 * getting, updating, and deleting a single song.
 * Requires the following environment variables:
 * - DB_URL: Database connection string.
 */
const Song = require('../models/song.model.js');
const catchAsync = require('../utils/catchAsync.js');

/**
 * Create song.
 *
 * @function createSong
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} JSON response containing the status and a message.
 *
 * @throws {BadRequest} If the request body is empty.
 */

// eslint-disable-next-line no-unused-vars
const createSong = catchAsync(async (req, res, next) => {
  await Song.create(req.body);
  res.status(201).send({ success: true, message: 'Song created successfully' });
});
/**
 * Get list of songs.
 *
 * @function getSongs
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} JSON response containing the status and the retrieved data
 *
 * @throws {InternalServerError} If there's an issue with the database or server.
 */

// eslint-disable-next-line no-unused-vars
const getSongs = catchAsync(async (req, res, next) => {
  const songs = await Song.find({}).sort({ createdAt: -1 });
  res.json(songs);
});

// eslint-disable-next-line no-unused-vars
const getSongDetails = catchAsync(async (req, res, next) => {
  const { id } = req.params
  const song = await Song.findById(id);
  res.json(song)
});

module.exports = { createSong, getSongs, getSongDetails };
